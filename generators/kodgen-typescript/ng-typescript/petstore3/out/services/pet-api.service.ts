import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { toQueryParams } from '../internals';
import { IPet } from '../models/i-pet';
import { IGetPetFindByStatusQueryParameters } from '../models/i-get-pet-find-by-status-query-parameters';
import { IGetPetFindByTagsQueryParameters } from '../models/i-get-pet-find-by-tags-query-parameters';
import { IPostPetPetIdQueryParameters } from '../models/i-post-pet-pet-id-query-parameters';
import { IPostPetPetIdUploadImageQueryParameters } from '../models/i-post-pet-pet-id-upload-image-query-parameters';
import { IApiResponse } from '../models/i-api-response';

/** @description Everything about your Pets */
@Injectable({ providedIn: 'root' })
export class PetApiService {
	private readonly baseUrl = '/api/v3';

	constructor(private readonly http: HttpClient) {}

	/**
	 * @summary Update an existing pet
	 * @description Update an existing pet by Id
	 * @param {IPet} body - Update an existent pet in the store
	 */
	updatePet(
		body: IPet,
	): Observable<IPet> {
		return this.http.request<IPet>(
			'PUT',
			`${this.baseUrl}/pet`,
			{
				body: body,
			},
		);
	}

	/**
	 * @summary Add a new pet to the store
	 * @description Add a new pet to the store
	 * @param {IPet} body - Create a new pet in the store
	 */
	addPet(
		body: IPet,
	): Observable<IPet> {
		return this.http.request<IPet>(
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
	 * @param {IGetPetFindByStatusQueryParameters} queryParams
	 */
	findPetsByStatus(
		queryParams: IGetPetFindByStatusQueryParameters,
	): Observable<Array<IPet>> {
		const params = new HttpParams({
			fromString: toQueryParams({
				'status': queryParams.status,
			}),
		});

		return this.http.request<Array<IPet>>(
			'GET',
			`${this.baseUrl}/pet/findByStatus`,
			{
				params,
			},
		);
	}

	/**
	 * @summary Finds Pets by tags
	 * @description Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
	 * @param {IGetPetFindByTagsQueryParameters} queryParams
	 */
	findPetsByTags(
		queryParams: IGetPetFindByTagsQueryParameters,
	): Observable<Array<IPet>> {
		const params = new HttpParams({
			fromString: toQueryParams({
				'tags': queryParams.tags,
			}),
		});

		return this.http.request<Array<IPet>>(
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
	 * @param {number} petId
	 */
	getPetById(
		petId: number,
	): Observable<IPet> {
		return this.http.request<IPet>(
			'GET',
			`${this.baseUrl}/pet/${petId}`,
			{
			},
		);
	}

	/**
	 * @summary Updates a pet in the store with form data
	 * @param {number} petId
	 * @param {IPostPetPetIdQueryParameters} queryParams
	 */
	updatePetWithForm(
		petId: number,
		queryParams: IPostPetPetIdQueryParameters,
	): Observable<void> {
		const params = new HttpParams({
			fromString: toQueryParams({
				'name': queryParams.name,
				'status': queryParams.status,
			}),
		});

		return this.http.request<void>(
			'POST',
			`${this.baseUrl}/pet/${petId}`,
			{
				params,
			},
		);
	}

	/**
	 * @summary Deletes a pet
	 * @param {number} petId
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

	/**
	 * @summary uploads an image
	 * @param {number} petId
	 * @param {IPostPetPetIdUploadImageQueryParameters} queryParams
	 * @param {Blob} [body]
	 */
	uploadFile(
		petId: number,
		queryParams: IPostPetPetIdUploadImageQueryParameters,
		body?: Blob,
	): Observable<IApiResponse> {
		const params = new HttpParams({
			fromString: toQueryParams({
				'additionalMetadata': queryParams.additionalMetadata,
			}),
		});

		return this.http.request<IApiResponse>(
			'POST',
			`${this.baseUrl}/pet/${petId}/uploadImage`,
			{
				body: body,
				params,
			},
		);
	}
}
