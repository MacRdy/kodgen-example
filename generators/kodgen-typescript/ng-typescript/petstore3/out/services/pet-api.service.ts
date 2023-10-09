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
		observe?: 'body',
		responseType?: 'json',
	): Observable<IPet>;
	updatePet(
		body: IPet,
		observe?: 'body',
		responseType?: 'blob',
	): Observable<Blob>;
	updatePet(
		body: IPet,
		observe?: 'body',
		responseType?: 'arraybuffer',
	): Observable<ArrayBuffer>;
	updatePet(
		body: IPet,
		observe?: 'body',
		responseType?: 'text',
	): Observable<string>;
	updatePet(
		body: IPet,
		observe?: 'events',
		responseType?: 'json',
		reportProgress?: boolean,
	): Observable<HttpEvent<IPet>>;
	updatePet(
		body: IPet,
		observe?: 'events',
		responseType?: 'blob',
		reportProgress?: boolean,
	): Observable<HttpEvent<Blob>>;
	updatePet(
		body: IPet,
		observe?: 'events',
		responseType?: 'arraybuffer',
		reportProgress?: boolean,
	): Observable<HttpEvent<ArrayBuffer>>;
	updatePet(
		body: IPet,
		observe?: 'events',
		responseType?: 'text',
		reportProgress?: boolean,
	): Observable<HttpEvent<string>>;
	updatePet(
		body: IPet,
		observe: 'body' | 'events' = 'body',
		responseType: 'json' | 'blob' | 'arraybuffer' | 'text' = 'json',
		reportProgress = false,
	): Observable<IPet | Blob | ArrayBuffer | string | HttpEvent<IPet> | HttpEvent<Blob> | HttpEvent<ArrayBuffer> | HttpEvent<string>> {
		return this.http.request<IPet>(
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
	 * @description Add a new pet to the store
	 * @param {IPet} body - Create a new pet in the store
	 */
	addPet(
		body: IPet,
		observe?: 'body',
		responseType?: 'json',
	): Observable<IPet>;
	addPet(
		body: IPet,
		observe?: 'body',
		responseType?: 'blob',
	): Observable<Blob>;
	addPet(
		body: IPet,
		observe?: 'body',
		responseType?: 'arraybuffer',
	): Observable<ArrayBuffer>;
	addPet(
		body: IPet,
		observe?: 'body',
		responseType?: 'text',
	): Observable<string>;
	addPet(
		body: IPet,
		observe?: 'events',
		responseType?: 'json',
		reportProgress?: boolean,
	): Observable<HttpEvent<IPet>>;
	addPet(
		body: IPet,
		observe?: 'events',
		responseType?: 'blob',
		reportProgress?: boolean,
	): Observable<HttpEvent<Blob>>;
	addPet(
		body: IPet,
		observe?: 'events',
		responseType?: 'arraybuffer',
		reportProgress?: boolean,
	): Observable<HttpEvent<ArrayBuffer>>;
	addPet(
		body: IPet,
		observe?: 'events',
		responseType?: 'text',
		reportProgress?: boolean,
	): Observable<HttpEvent<string>>;
	addPet(
		body: IPet,
		observe: 'body' | 'events' = 'body',
		responseType: 'json' | 'blob' | 'arraybuffer' | 'text' = 'json',
		reportProgress = false,
	): Observable<IPet | Blob | ArrayBuffer | string | HttpEvent<IPet> | HttpEvent<Blob> | HttpEvent<ArrayBuffer> | HttpEvent<string>> {
		return this.http.request<IPet>(
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
	 * @param {IGetPetFindByStatusQueryParameters} queryParams
	 */
	findPetsByStatus(
		queryParams: IGetPetFindByStatusQueryParameters,
		observe?: 'body',
		responseType?: 'json',
	): Observable<Array<IPet>>;
	findPetsByStatus(
		queryParams: IGetPetFindByStatusQueryParameters,
		observe?: 'body',
		responseType?: 'blob',
	): Observable<Blob>;
	findPetsByStatus(
		queryParams: IGetPetFindByStatusQueryParameters,
		observe?: 'body',
		responseType?: 'arraybuffer',
	): Observable<ArrayBuffer>;
	findPetsByStatus(
		queryParams: IGetPetFindByStatusQueryParameters,
		observe?: 'body',
		responseType?: 'text',
	): Observable<string>;
	findPetsByStatus(
		queryParams: IGetPetFindByStatusQueryParameters,
		observe?: 'events',
		responseType?: 'json',
		reportProgress?: boolean,
	): Observable<HttpEvent<Array<IPet>>>;
	findPetsByStatus(
		queryParams: IGetPetFindByStatusQueryParameters,
		observe?: 'events',
		responseType?: 'blob',
		reportProgress?: boolean,
	): Observable<HttpEvent<Blob>>;
	findPetsByStatus(
		queryParams: IGetPetFindByStatusQueryParameters,
		observe?: 'events',
		responseType?: 'arraybuffer',
		reportProgress?: boolean,
	): Observable<HttpEvent<ArrayBuffer>>;
	findPetsByStatus(
		queryParams: IGetPetFindByStatusQueryParameters,
		observe?: 'events',
		responseType?: 'text',
		reportProgress?: boolean,
	): Observable<HttpEvent<string>>;
	findPetsByStatus(
		queryParams: IGetPetFindByStatusQueryParameters,
		observe: 'body' | 'events' = 'body',
		responseType: 'json' | 'blob' | 'arraybuffer' | 'text' = 'json',
		reportProgress = false,
	): Observable<Array<IPet> | Blob | ArrayBuffer | string | HttpEvent<Array<IPet>> | HttpEvent<Blob> | HttpEvent<ArrayBuffer> | HttpEvent<string>> {
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
				observe: observe as any,
				responseType: responseType as any,
				reportProgress,
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
		observe?: 'body',
		responseType?: 'json',
	): Observable<Array<IPet>>;
	findPetsByTags(
		queryParams: IGetPetFindByTagsQueryParameters,
		observe?: 'body',
		responseType?: 'blob',
	): Observable<Blob>;
	findPetsByTags(
		queryParams: IGetPetFindByTagsQueryParameters,
		observe?: 'body',
		responseType?: 'arraybuffer',
	): Observable<ArrayBuffer>;
	findPetsByTags(
		queryParams: IGetPetFindByTagsQueryParameters,
		observe?: 'body',
		responseType?: 'text',
	): Observable<string>;
	findPetsByTags(
		queryParams: IGetPetFindByTagsQueryParameters,
		observe?: 'events',
		responseType?: 'json',
		reportProgress?: boolean,
	): Observable<HttpEvent<Array<IPet>>>;
	findPetsByTags(
		queryParams: IGetPetFindByTagsQueryParameters,
		observe?: 'events',
		responseType?: 'blob',
		reportProgress?: boolean,
	): Observable<HttpEvent<Blob>>;
	findPetsByTags(
		queryParams: IGetPetFindByTagsQueryParameters,
		observe?: 'events',
		responseType?: 'arraybuffer',
		reportProgress?: boolean,
	): Observable<HttpEvent<ArrayBuffer>>;
	findPetsByTags(
		queryParams: IGetPetFindByTagsQueryParameters,
		observe?: 'events',
		responseType?: 'text',
		reportProgress?: boolean,
	): Observable<HttpEvent<string>>;
	findPetsByTags(
		queryParams: IGetPetFindByTagsQueryParameters,
		observe: 'body' | 'events' = 'body',
		responseType: 'json' | 'blob' | 'arraybuffer' | 'text' = 'json',
		reportProgress = false,
	): Observable<Array<IPet> | Blob | ArrayBuffer | string | HttpEvent<Array<IPet>> | HttpEvent<Blob> | HttpEvent<ArrayBuffer> | HttpEvent<string>> {
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
				observe: observe as any,
				responseType: responseType as any,
				reportProgress,
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
		observe?: 'body',
		responseType?: 'json',
	): Observable<IPet>;
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
	): Observable<HttpEvent<IPet>>;
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
	): Observable<IPet | Blob | ArrayBuffer | string | HttpEvent<IPet> | HttpEvent<Blob> | HttpEvent<ArrayBuffer> | HttpEvent<string>> {
		return this.http.request<IPet>(
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
	 * @param {number} petId
	 * @param {IPostPetPetIdQueryParameters} queryParams
	 */
	updatePetWithForm(
		petId: number,
		queryParams: IPostPetPetIdQueryParameters,
		observe?: 'body',
		responseType?: 'json',
	): Observable<void>;
	updatePetWithForm(
		petId: number,
		queryParams: IPostPetPetIdQueryParameters,
		observe?: 'body',
		responseType?: 'blob',
	): Observable<Blob>;
	updatePetWithForm(
		petId: number,
		queryParams: IPostPetPetIdQueryParameters,
		observe?: 'body',
		responseType?: 'arraybuffer',
	): Observable<ArrayBuffer>;
	updatePetWithForm(
		petId: number,
		queryParams: IPostPetPetIdQueryParameters,
		observe?: 'body',
		responseType?: 'text',
	): Observable<string>;
	updatePetWithForm(
		petId: number,
		queryParams: IPostPetPetIdQueryParameters,
		observe?: 'events',
		responseType?: 'json',
		reportProgress?: boolean,
	): Observable<HttpEvent<void>>;
	updatePetWithForm(
		petId: number,
		queryParams: IPostPetPetIdQueryParameters,
		observe?: 'events',
		responseType?: 'blob',
		reportProgress?: boolean,
	): Observable<HttpEvent<Blob>>;
	updatePetWithForm(
		petId: number,
		queryParams: IPostPetPetIdQueryParameters,
		observe?: 'events',
		responseType?: 'arraybuffer',
		reportProgress?: boolean,
	): Observable<HttpEvent<ArrayBuffer>>;
	updatePetWithForm(
		petId: number,
		queryParams: IPostPetPetIdQueryParameters,
		observe?: 'events',
		responseType?: 'text',
		reportProgress?: boolean,
	): Observable<HttpEvent<string>>;
	updatePetWithForm(
		petId: number,
		queryParams: IPostPetPetIdQueryParameters,
		observe: 'body' | 'events' = 'body',
		responseType: 'json' | 'blob' | 'arraybuffer' | 'text' = 'json',
		reportProgress = false,
	): Observable<void | Blob | ArrayBuffer | string | HttpEvent<void> | HttpEvent<Blob> | HttpEvent<ArrayBuffer> | HttpEvent<string>> {
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
				observe: observe as any,
				responseType: responseType as any,
				reportProgress,
			},
		);
	}

	/**
	 * @summary Deletes a pet
	 * @param {number} petId
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
		observe?: 'body',
		responseType?: 'json',
	): Observable<IApiResponse>;
	uploadFile(
		petId: number,
		queryParams: IPostPetPetIdUploadImageQueryParameters,
		body?: Blob,
		observe?: 'body',
		responseType?: 'blob',
	): Observable<Blob>;
	uploadFile(
		petId: number,
		queryParams: IPostPetPetIdUploadImageQueryParameters,
		body?: Blob,
		observe?: 'body',
		responseType?: 'arraybuffer',
	): Observable<ArrayBuffer>;
	uploadFile(
		petId: number,
		queryParams: IPostPetPetIdUploadImageQueryParameters,
		body?: Blob,
		observe?: 'body',
		responseType?: 'text',
	): Observable<string>;
	uploadFile(
		petId: number,
		queryParams: IPostPetPetIdUploadImageQueryParameters,
		body?: Blob,
		observe?: 'events',
		responseType?: 'json',
		reportProgress?: boolean,
	): Observable<HttpEvent<IApiResponse>>;
	uploadFile(
		petId: number,
		queryParams: IPostPetPetIdUploadImageQueryParameters,
		body?: Blob,
		observe?: 'events',
		responseType?: 'blob',
		reportProgress?: boolean,
	): Observable<HttpEvent<Blob>>;
	uploadFile(
		petId: number,
		queryParams: IPostPetPetIdUploadImageQueryParameters,
		body?: Blob,
		observe?: 'events',
		responseType?: 'arraybuffer',
		reportProgress?: boolean,
	): Observable<HttpEvent<ArrayBuffer>>;
	uploadFile(
		petId: number,
		queryParams: IPostPetPetIdUploadImageQueryParameters,
		body?: Blob,
		observe?: 'events',
		responseType?: 'text',
		reportProgress?: boolean,
	): Observable<HttpEvent<string>>;
	uploadFile(
		petId: number,
		queryParams: IPostPetPetIdUploadImageQueryParameters,
		body?: Blob,
		observe: 'body' | 'events' = 'body',
		responseType: 'json' | 'blob' | 'arraybuffer' | 'text' = 'json',
		reportProgress = false,
	): Observable<IApiResponse | Blob | ArrayBuffer | string | HttpEvent<IApiResponse> | HttpEvent<Blob> | HttpEvent<ArrayBuffer> | HttpEvent<string>> {
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
				observe: observe as any,
				responseType: responseType as any,
				reportProgress,
			},
		);
	}
}
