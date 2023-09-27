import { AxiosProgressEvent } from 'axios';

import { apiRequest, toQueryParams } from '../internals';
import { Pet } from '../models/Pet';
import { GetPetFindByStatusQueryParameters } from '../models/GetPetFindByStatusQueryParameters';
import { GetPetFindByTagsQueryParameters } from '../models/GetPetFindByTagsQueryParameters';
import { PostPetPetIdQueryParameters } from '../models/PostPetPetIdQueryParameters';
import { PostPetPetIdUploadImageQueryParameters } from '../models/PostPetPetIdUploadImageQueryParameters';
import { ApiResponse } from '../models/ApiResponse';

/**
 * @summary Update an existing pet
 * @description Update an existing pet by Id
 * @param {Pet} body - Update an existent pet in the store
 */
export const petUpdatePet = (
	body: Pet,
): Promise<Pet> => {
	return apiRequest<Pet>({
		method: 'PUT',
		url: `/pet`,
		data: body,
	});
};

/**
 * @summary Add a new pet to the store
 * @description Add a new pet to the store
 * @param {Pet} body - Create a new pet in the store
 */
export const petAddPet = (
	body: Pet,
): Promise<Pet> => {
	return apiRequest<Pet>({
		method: 'POST',
		url: `/pet`,
		data: body,
	});
};

/**
 * @summary Finds Pets by status
 * @description Multiple status values can be provided with comma separated strings
 * @param {GetPetFindByStatusQueryParameters} queryParams
 */
export const petFindPetsByStatus = (
	queryParams: GetPetFindByStatusQueryParameters,
): Promise<Array<Pet>> => {
	const params = toQueryParams({
		'status': queryParams.status,
	});

	return apiRequest<Array<Pet>>({
		method: 'GET',
		url: `/pet/findByStatus`,
		params,
	});
};

/**
 * @summary Finds Pets by tags
 * @description Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
 * @param {GetPetFindByTagsQueryParameters} queryParams
 */
export const petFindPetsByTags = (
	queryParams: GetPetFindByTagsQueryParameters,
): Promise<Array<Pet>> => {
	const params = toQueryParams({
		'tags': queryParams.tags,
	});

	return apiRequest<Array<Pet>>({
		method: 'GET',
		url: `/pet/findByTags`,
		params,
	});
};

/**
 * @summary Find pet by ID
 * @description Returns a single pet
 * @param {number} petId
 */
export const petGetPetById = (
	petId: number,
): Promise<Pet> => {
	return apiRequest<Pet>({
		method: 'GET',
		url: `/pet/${petId}`,
	});
};

/**
 * @summary Updates a pet in the store with form data
 * @param {number} petId
 * @param {PostPetPetIdQueryParameters} queryParams
 */
export const petUpdatePetWithForm = (
	petId: number,
	queryParams: PostPetPetIdQueryParameters,
): Promise<void> => {
	const params = toQueryParams({
		'name': queryParams.name,
		'status': queryParams.status,
	});

	return apiRequest<void>({
		method: 'POST',
		url: `/pet/${petId}`,
		params,
	});
};

/**
 * @summary Deletes a pet
 * @param {number} petId
 */
export const petDeletePet = (
	petId: number,
): Promise<void> => {
	return apiRequest<void>({
		method: 'DELETE',
		url: `/pet/${petId}`,
	});
};

/**
 * @summary uploads an image
 * @param {number} petId
 * @param {PostPetPetIdUploadImageQueryParameters} queryParams
 * @param {Blob} [body]
 */
export const petUploadFile = (
	petId: number,
	queryParams: PostPetPetIdUploadImageQueryParameters,
	body?: Blob,
): Promise<ApiResponse> => {
	const params = toQueryParams({
		'additionalMetadata': queryParams.additionalMetadata,
	});

	return apiRequest<ApiResponse>({
		method: 'POST',
		url: `/pet/${petId}/uploadImage`,
		params,
		data: body,
	});
};
