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
	 * @param {PostPetPetIdUploadImageFormData} [body]
	 */
	uploadFile(
		petId: number,
		body?: PostPetPetIdUploadImageFormData,
		observe?: 'body',
		responseType?: 'json',
	): Observable<ApiResponse>;
	uploadFile(
		petId: number,
		body?: PostPetPetIdUploadImageFormData,
		observe?: 'body',
		responseType?: 'blob',
	): Observable<Blob>;
	uploadFile(
		petId: number,
		body?: PostPetPetIdUploadImageFormData,
		observe?: 'body',
		responseType?: 'arraybuffer',
	): Observable<ArrayBuffer>;
	uploadFile(
		petId: number,
		body?: PostPetPetIdUploadImageFormData,
		observe?: 'body',
		responseType?: 'text',
	): Observable<string>;
	uploadFile(
		petId: number,
		body?: PostPetPetIdUploadImageFormData,
		observe?: 'events',
		responseType?: 'json',
		reportProgress?: boolean,
	): Observable<HttpEvent<ApiResponse>>;
	uploadFile(
		petId: number,
		body?: PostPetPetIdUploadImageFormData,
		observe?: 'events',
		responseType?: 'blob',
		reportProgress?: boolean,
	): Observable<HttpEvent<Blob>>;
	uploadFile(
		petId: number,
		body?: PostPetPetIdUploadImageFormData,
		observe?: 'events',
		responseType?: 'arraybuffer',
		reportProgress?: boolean,
	): Observable<HttpEvent<ArrayBuffer>>;
	uploadFile(
		petId: number,
		body?: PostPetPetIdUploadImageFormData,
		observe?: 'events',
		responseType?: 'text',
		reportProgress?: boolean,
	): Observable<HttpEvent<string>>;
	uploadFile(
		petId: number,
		body?: PostPetPetIdUploadImageFormData,
		observe: 'body' | 'events' = 'body',
		responseType: 'json' | 'blob' | 'arraybuffer' | 'text' = 'json',
		reportProgress = false,
	): Observable<ApiResponse | Blob | ArrayBuffer | string | HttpEvent<ApiResponse> | HttpEvent<Blob> | HttpEvent<ArrayBuffer> | HttpEvent<string>> {
		const formData = new FormData();
		Object.entries(body ?? {}).forEach(([key, value]) => formData.append(key, value));

		return this.http.request<ApiResponse>(
			'POST',
			`${this.baseUrl}/pet/${petId}/uploadImage`,
			{
				body: formData,
				observe: observe as any,
				responseType: responseType as any,
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
		observe?: 'body',
		responseType?: 'json',
	): Observable<void>;
	updatePet(
		body: Pet,
		observe?: 'body',
		responseType?: 'blob',
	): Observable<Blob>;
	updatePet(
		body: Pet,
		observe?: 'body',
		responseType?: 'arraybuffer',
	): Observable<ArrayBuffer>;
	updatePet(
		body: Pet,
		observe?: 'body',
		responseType?: 'text',
	): Observable<string>;
	updatePet(
		body: Pet,
		observe?: 'events',
		responseType?: 'json',
		reportProgress?: boolean,
	): Observable<HttpEvent<void>>;
	updatePet(
		body: Pet,
		observe?: 'events',
		responseType?: 'blob',
		reportProgress?: boolean,
	): Observable<HttpEvent<Blob>>;
	updatePet(
		body: Pet,
		observe?: 'events',
		responseType?: 'arraybuffer',
		reportProgress?: boolean,
	): Observable<HttpEvent<ArrayBuffer>>;
	updatePet(
		body: Pet,
		observe?: 'events',
		responseType?: 'text',
		reportProgress?: boolean,
	): Observable<HttpEvent<string>>;
	updatePet(
		body: Pet,
		observe: 'body' | 'events' = 'body',
		responseType: 'json' | 'blob' | 'arraybuffer' | 'text' = 'json',
		reportProgress = false,
	): Observable<void | Blob | ArrayBuffer | string | HttpEvent<void> | HttpEvent<Blob> | HttpEvent<ArrayBuffer> | HttpEvent<string>> {
		return this.http.request<void>(
			'PUT',
			`${this.baseUrl}/pet`,
			{
				body: body,
				observe: observe as any,
				responseType: responseType as any,
				reportProgress,
			},
		);
	}

	/**
	 * @summary Add a new pet to the store
	 * @param {Pet} body - Pet object that needs to be added to the store
	 */
	addPet(
		body: Pet,
		observe?: 'body',
		responseType?: 'json',
	): Observable<void>;
	addPet(
		body: Pet,
		observe?: 'body',
		responseType?: 'blob',
	): Observable<Blob>;
	addPet(
		body: Pet,
		observe?: 'body',
		responseType?: 'arraybuffer',
	): Observable<ArrayBuffer>;
	addPet(
		body: Pet,
		observe?: 'body',
		responseType?: 'text',
	): Observable<string>;
	addPet(
		body: Pet,
		observe?: 'events',
		responseType?: 'json',
		reportProgress?: boolean,
	): Observable<HttpEvent<void>>;
	addPet(
		body: Pet,
		observe?: 'events',
		responseType?: 'blob',
		reportProgress?: boolean,
	): Observable<HttpEvent<Blob>>;
	addPet(
		body: Pet,
		observe?: 'events',
		responseType?: 'arraybuffer',
		reportProgress?: boolean,
	): Observable<HttpEvent<ArrayBuffer>>;
	addPet(
		body: Pet,
		observe?: 'events',
		responseType?: 'text',
		reportProgress?: boolean,
	): Observable<HttpEvent<string>>;
	addPet(
		body: Pet,
		observe: 'body' | 'events' = 'body',
		responseType: 'json' | 'blob' | 'arraybuffer' | 'text' = 'json',
		reportProgress = false,
	): Observable<void | Blob | ArrayBuffer | string | HttpEvent<void> | HttpEvent<Blob> | HttpEvent<ArrayBuffer> | HttpEvent<string>> {
		return this.http.request<void>(
			'POST',
			`${this.baseUrl}/pet`,
			{
				body: body,
				observe: observe as any,
				responseType: responseType as any,
				reportProgress,
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
		observe?: 'body',
		responseType?: 'json',
	): Observable<Array<Pet>>;
	findPetsByStatus(
		queryParams: GetPetFindByStatusQueryParameters,
		observe?: 'body',
		responseType?: 'blob',
	): Observable<Blob>;
	findPetsByStatus(
		queryParams: GetPetFindByStatusQueryParameters,
		observe?: 'body',
		responseType?: 'arraybuffer',
	): Observable<ArrayBuffer>;
	findPetsByStatus(
		queryParams: GetPetFindByStatusQueryParameters,
		observe?: 'body',
		responseType?: 'text',
	): Observable<string>;
	findPetsByStatus(
		queryParams: GetPetFindByStatusQueryParameters,
		observe?: 'events',
		responseType?: 'json',
		reportProgress?: boolean,
	): Observable<HttpEvent<Array<Pet>>>;
	findPetsByStatus(
		queryParams: GetPetFindByStatusQueryParameters,
		observe?: 'events',
		responseType?: 'blob',
		reportProgress?: boolean,
	): Observable<HttpEvent<Blob>>;
	findPetsByStatus(
		queryParams: GetPetFindByStatusQueryParameters,
		observe?: 'events',
		responseType?: 'arraybuffer',
		reportProgress?: boolean,
	): Observable<HttpEvent<ArrayBuffer>>;
	findPetsByStatus(
		queryParams: GetPetFindByStatusQueryParameters,
		observe?: 'events',
		responseType?: 'text',
		reportProgress?: boolean,
	): Observable<HttpEvent<string>>;
	findPetsByStatus(
		queryParams: GetPetFindByStatusQueryParameters,
		observe: 'body' | 'events' = 'body',
		responseType: 'json' | 'blob' | 'arraybuffer' | 'text' = 'json',
		reportProgress = false,
	): Observable<Array<Pet> | Blob | ArrayBuffer | string | HttpEvent<Array<Pet>> | HttpEvent<Blob> | HttpEvent<ArrayBuffer> | HttpEvent<string>> {
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
				observe: observe as any,
				responseType: responseType as any,
				reportProgress,
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
		observe?: 'body',
		responseType?: 'json',
	): Observable<Array<Pet>>;
	findPetsByTags(
		queryParams: GetPetFindByTagsQueryParameters,
		observe?: 'body',
		responseType?: 'blob',
	): Observable<Blob>;
	findPetsByTags(
		queryParams: GetPetFindByTagsQueryParameters,
		observe?: 'body',
		responseType?: 'arraybuffer',
	): Observable<ArrayBuffer>;
	findPetsByTags(
		queryParams: GetPetFindByTagsQueryParameters,
		observe?: 'body',
		responseType?: 'text',
	): Observable<string>;
	findPetsByTags(
		queryParams: GetPetFindByTagsQueryParameters,
		observe?: 'events',
		responseType?: 'json',
		reportProgress?: boolean,
	): Observable<HttpEvent<Array<Pet>>>;
	findPetsByTags(
		queryParams: GetPetFindByTagsQueryParameters,
		observe?: 'events',
		responseType?: 'blob',
		reportProgress?: boolean,
	): Observable<HttpEvent<Blob>>;
	findPetsByTags(
		queryParams: GetPetFindByTagsQueryParameters,
		observe?: 'events',
		responseType?: 'arraybuffer',
		reportProgress?: boolean,
	): Observable<HttpEvent<ArrayBuffer>>;
	findPetsByTags(
		queryParams: GetPetFindByTagsQueryParameters,
		observe?: 'events',
		responseType?: 'text',
		reportProgress?: boolean,
	): Observable<HttpEvent<string>>;
	findPetsByTags(
		queryParams: GetPetFindByTagsQueryParameters,
		observe: 'body' | 'events' = 'body',
		responseType: 'json' | 'blob' | 'arraybuffer' | 'text' = 'json',
		reportProgress = false,
	): Observable<Array<Pet> | Blob | ArrayBuffer | string | HttpEvent<Array<Pet>> | HttpEvent<Blob> | HttpEvent<ArrayBuffer> | HttpEvent<string>> {
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
				observe: observe as any,
				responseType: responseType as any,
				reportProgress,
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
		observe?: 'body',
		responseType?: 'json',
	): Observable<Pet>;
	getPetById(
		petId: number,
		observe?: 'body',
		responseType?: 'blob',
	): Observable<Blob>;
	getPetById(
		petId: number,
		observe?: 'body',
		responseType?: 'arraybuffer',
	): Observable<ArrayBuffer>;
	getPetById(
		petId: number,
		observe?: 'body',
		responseType?: 'text',
	): Observable<string>;
	getPetById(
		petId: number,
		observe?: 'events',
		responseType?: 'json',
		reportProgress?: boolean,
	): Observable<HttpEvent<Pet>>;
	getPetById(
		petId: number,
		observe?: 'events',
		responseType?: 'blob',
		reportProgress?: boolean,
	): Observable<HttpEvent<Blob>>;
	getPetById(
		petId: number,
		observe?: 'events',
		responseType?: 'arraybuffer',
		reportProgress?: boolean,
	): Observable<HttpEvent<ArrayBuffer>>;
	getPetById(
		petId: number,
		observe?: 'events',
		responseType?: 'text',
		reportProgress?: boolean,
	): Observable<HttpEvent<string>>;
	getPetById(
		petId: number,
		observe: 'body' | 'events' = 'body',
		responseType: 'json' | 'blob' | 'arraybuffer' | 'text' = 'json',
		reportProgress = false,
	): Observable<Pet | Blob | ArrayBuffer | string | HttpEvent<Pet> | HttpEvent<Blob> | HttpEvent<ArrayBuffer> | HttpEvent<string>> {
		return this.http.request<Pet>(
			'GET',
			`${this.baseUrl}/pet/${petId}`,
			{
				observe: observe as any,
				responseType: responseType as any,
				reportProgress,
			},
		);
	}

	/**
	 * @summary Updates a pet in the store with form data
	 * @param {number} petId - ID of pet that needs to be updated
	 * @param {PostPetPetIdFormData} [body]
	 */
	updatePetWithForm(
		petId: number,
		body?: PostPetPetIdFormData,
		observe?: 'body',
		responseType?: 'json',
	): Observable<void>;
	updatePetWithForm(
		petId: number,
		body?: PostPetPetIdFormData,
		observe?: 'body',
		responseType?: 'blob',
	): Observable<Blob>;
	updatePetWithForm(
		petId: number,
		body?: PostPetPetIdFormData,
		observe?: 'body',
		responseType?: 'arraybuffer',
	): Observable<ArrayBuffer>;
	updatePetWithForm(
		petId: number,
		body?: PostPetPetIdFormData,
		observe?: 'body',
		responseType?: 'text',
	): Observable<string>;
	updatePetWithForm(
		petId: number,
		body?: PostPetPetIdFormData,
		observe?: 'events',
		responseType?: 'json',
		reportProgress?: boolean,
	): Observable<HttpEvent<void>>;
	updatePetWithForm(
		petId: number,
		body?: PostPetPetIdFormData,
		observe?: 'events',
		responseType?: 'blob',
		reportProgress?: boolean,
	): Observable<HttpEvent<Blob>>;
	updatePetWithForm(
		petId: number,
		body?: PostPetPetIdFormData,
		observe?: 'events',
		responseType?: 'arraybuffer',
		reportProgress?: boolean,
	): Observable<HttpEvent<ArrayBuffer>>;
	updatePetWithForm(
		petId: number,
		body?: PostPetPetIdFormData,
		observe?: 'events',
		responseType?: 'text',
		reportProgress?: boolean,
	): Observable<HttpEvent<string>>;
	updatePetWithForm(
		petId: number,
		body?: PostPetPetIdFormData,
		observe: 'body' | 'events' = 'body',
		responseType: 'json' | 'blob' | 'arraybuffer' | 'text' = 'json',
		reportProgress = false,
	): Observable<void | Blob | ArrayBuffer | string | HttpEvent<void> | HttpEvent<Blob> | HttpEvent<ArrayBuffer> | HttpEvent<string>> {
		const formData = new FormData();
		Object.entries(body ?? {}).forEach(([key, value]) => formData.append(key, value));

		return this.http.request<void>(
			'POST',
			`${this.baseUrl}/pet/${petId}`,
			{
				body: formData,
				observe: observe as any,
				responseType: responseType as any,
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
		observe?: 'body',
		responseType?: 'json',
	): Observable<void>;
	deletePet(
		petId: number,
		observe?: 'body',
		responseType?: 'blob',
	): Observable<Blob>;
	deletePet(
		petId: number,
		observe?: 'body',
		responseType?: 'arraybuffer',
	): Observable<ArrayBuffer>;
	deletePet(
		petId: number,
		observe?: 'body',
		responseType?: 'text',
	): Observable<string>;
	deletePet(
		petId: number,
		observe?: 'events',
		responseType?: 'json',
		reportProgress?: boolean,
	): Observable<HttpEvent<void>>;
	deletePet(
		petId: number,
		observe?: 'events',
		responseType?: 'blob',
		reportProgress?: boolean,
	): Observable<HttpEvent<Blob>>;
	deletePet(
		petId: number,
		observe?: 'events',
		responseType?: 'arraybuffer',
		reportProgress?: boolean,
	): Observable<HttpEvent<ArrayBuffer>>;
	deletePet(
		petId: number,
		observe?: 'events',
		responseType?: 'text',
		reportProgress?: boolean,
	): Observable<HttpEvent<string>>;
	deletePet(
		petId: number,
		observe: 'body' | 'events' = 'body',
		responseType: 'json' | 'blob' | 'arraybuffer' | 'text' = 'json',
		reportProgress = false,
	): Observable<void | Blob | ArrayBuffer | string | HttpEvent<void> | HttpEvent<Blob> | HttpEvent<ArrayBuffer> | HttpEvent<string>> {
		return this.http.request<void>(
			'DELETE',
			`${this.baseUrl}/pet/${petId}`,
			{
				observe: observe as any,
				responseType: responseType as any,
				reportProgress,
			},
		);
	}
}
