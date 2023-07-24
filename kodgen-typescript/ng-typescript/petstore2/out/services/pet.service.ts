import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { toQueryParams } from '../internals';
import { PostPetPetIdUploadImageFormData } from '../models/post-pet-pet-id-upload-image-form-data';
import { ApiResponse } from '../models/api-response';
import { Pet } from '../models/pet';
import { GetPetFindByStatusQueryParameters } from '../models/get-pet-find-by-status-query-parameters';
import { GetPetFindByTagsQueryParameters } from '../models/get-pet-find-by-tags-query-parameters';
import { PostPetPetIdFormData } from '../models/post-pet-pet-id-form-data';

/** @description Everything about your Pets */
@Injectable({ providedIn: 'root' })
export class PetService {
	private readonly baseUrl = 'https://petstore.swagger.io/v2';

	constructor(private readonly http: HttpClient) {}

	/**
	 * @summary uploads an image
	 * @param {number} petId - ID of pet to update
	 * @param {PostPetPetIdUploadImageFormData} body
	 */
	uploadFile(
		petId: number,
		body?: PostPetPetIdUploadImageFormData,
		observe?: 'body',
	): Observable<ApiResponse>;
	uploadFile(
		petId: number,
		body?: PostPetPetIdUploadImageFormData,
		observe?: 'events',
		reportProgress?: boolean,
	): Observable<HttpEvent<ApiResponse>>;
	uploadFile(
		petId: number,
		body?: PostPetPetIdUploadImageFormData,
		observe: 'body' | 'events' = 'body',
		reportProgress?: boolean,
	): Observable<ApiResponse | HttpEvent<ApiResponse>> {
		const formData = new FormData();
		Object.entries(body ?? {}).forEach(([key, value]) => formData.append(key, value));

		return this.http.request<ApiResponse>(
			'POST',
			`${this.baseUrl}/pet/${petId}/uploadImage`,
			{
				body: formData,
				observe: observe as any,
				reportProgress,
			},
		);
	}

	/**
	 * @summary Update an existing pet
	 * @param {Pet} body - Pet object that needs to be added to the store
	 */
	updatePet(
		body: Pet,
	): Observable<void> {
		return this.http.request<void>(
			'PUT',
			`${this.baseUrl}/pet`,
			{
				body: body,
			},
		);
	}

	/**
	 * @summary Add a new pet to the store
	 * @param {Pet} body - Pet object that needs to be added to the store
	 */
	addPet(
		body: Pet,
	): Observable<void> {
		return this.http.request<void>(
			'POST',
			`${this.baseUrl}/pet`,
			{
				body: body,
			},
		);
	}

	/**
	 * @summary Finds Pets by status
	 * @description Multiple status values can be provided with comma separated strings
	 * @param {GetPetFindByStatusQueryParameters} queryParams
	 */
	findPetsByStatus(
		queryParams: GetPetFindByStatusQueryParameters,
	): Observable<Array<Pet>> {
		const params = new HttpParams({
			fromString: toQueryParams({
				'status': queryParams.status,
			}),
		});

		return this.http.request<Array<Pet>>(
			'GET',
			`${this.baseUrl}/pet/findByStatus`,
			{
				params,
			},
		);
	}

	/**
	 * @deprecated
	 * @summary Finds Pets by tags
	 * @description Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
	 * @param {GetPetFindByTagsQueryParameters} queryParams
	 */
	findPetsByTags(
		queryParams: GetPetFindByTagsQueryParameters,
	): Observable<Array<Pet>> {
		const params = new HttpParams({
			fromString: toQueryParams({
				'tags': queryParams.tags,
			}),
		});

		return this.http.request<Array<Pet>>(
			'GET',
			`${this.baseUrl}/pet/findByTags`,
			{
				params,
			},
		);
	}

	/**
	 * @summary Find pet by ID
	 * @description Returns a single pet
	 * @param {number} petId - ID of pet to return
	 */
	getPetById(
		petId: number,
	): Observable<Pet> {
		return this.http.request<Pet>(
			'GET',
			`${this.baseUrl}/pet/${petId}`,
			{
			},
		);
	}

	/**
	 * @summary Updates a pet in the store with form data
	 * @param {number} petId - ID of pet that needs to be updated
	 * @param {PostPetPetIdFormData} body
	 */
	updatePetWithForm(
		petId: number,
		body?: PostPetPetIdFormData,
		observe?: 'body',
	): Observable<void>;
	updatePetWithForm(
		petId: number,
		body?: PostPetPetIdFormData,
		observe?: 'events',
		reportProgress?: boolean,
	): Observable<HttpEvent<void>>;
	updatePetWithForm(
		petId: number,
		body?: PostPetPetIdFormData,
		observe: 'body' | 'events' = 'body',
		reportProgress?: boolean,
	): Observable<void | HttpEvent<void>> {
		const formData = new FormData();
		Object.entries(body ?? {}).forEach(([key, value]) => formData.append(key, value));

		return this.http.request<void>(
			'POST',
			`${this.baseUrl}/pet/${petId}`,
			{
				body: formData,
				observe: observe as any,
				reportProgress,
			},
		);
	}

	/**
	 * @summary Deletes a pet
	 * @param {number} petId - Pet id to delete
	 */
	deletePet(
		petId: number,
	): Observable<void> {
		return this.http.request<void>(
			'DELETE',
			`${this.baseUrl}/pet/${petId}`,
			{
			},
		);
	}
}
