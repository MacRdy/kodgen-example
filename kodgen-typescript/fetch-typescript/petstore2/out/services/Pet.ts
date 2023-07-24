import { apiRequest, toQueryParams } from '../internals';
import { PostPetPetIdUploadImageFormData } from '../models/PostPetPetIdUploadImageFormData';
import { ApiResponse } from '../models/ApiResponse';
import { Pet } from '../models/Pet';
import { GetPetFindByStatusQueryParameters } from '../models/GetPetFindByStatusQueryParameters';
import { GetPetFindByTagsQueryParameters } from '../models/GetPetFindByTagsQueryParameters';
import { PostPetPetIdFormData } from '../models/PostPetPetIdFormData';

/** @description Everything about your Pets */
export class PetApi {

	/**
	 * @summary uploads an image
	 * @param {number} petId - ID of pet to update
	 * @param {PostPetPetIdUploadImageFormData} body
	 */
	static uploadFile(
		petId: number,
		body?: PostPetPetIdUploadImageFormData,
	): Promise<ApiResponse> {
		const formData = new FormData();
		Object.entries(body ?? {}).forEach(([key, value]) => formData.append(key, value));

		return apiRequest<ApiResponse>({
			method: 'POST',
			url: `/pet/${petId}/uploadImage`,
			data: formData,
		});
	}

	/**
	 * @summary Update an existing pet
	 * @param {Pet} body - Pet object that needs to be added to the store
	 */
	static updatePet(
		body: Pet,
	): Promise<void> {
		return apiRequest<void>({
			method: 'PUT',
			url: `/pet`,
			data: body,
		});
	}

	/**
	 * @summary Add a new pet to the store
	 * @param {Pet} body - Pet object that needs to be added to the store
	 */
	static addPet(
		body: Pet,
	): Promise<void> {
		return apiRequest<void>({
			method: 'POST',
			url: `/pet`,
			data: body,
		});
	}

	/**
	 * @summary Finds Pets by status
	 * @description Multiple status values can be provided with comma separated strings
	 * @param {GetPetFindByStatusQueryParameters} queryParams
	 */
	static findPetsByStatus(
		queryParams: GetPetFindByStatusQueryParameters,
	): Promise<Array<Pet>> {
		const params = toQueryParams({
			'status': queryParams.status,
		});

		return apiRequest<Array<Pet>>({
			method: 'GET',
			url: `/pet/findByStatus`,
			params,
		});
	}

	/**
	 * @deprecated
	 * @summary Finds Pets by tags
	 * @description Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
	 * @param {GetPetFindByTagsQueryParameters} queryParams
	 */
	static findPetsByTags(
		queryParams: GetPetFindByTagsQueryParameters,
	): Promise<Array<Pet>> {
		const params = toQueryParams({
			'tags': queryParams.tags,
		});

		return apiRequest<Array<Pet>>({
			method: 'GET',
			url: `/pet/findByTags`,
			params,
		});
	}

	/**
	 * @summary Find pet by ID
	 * @description Returns a single pet
	 * @param {number} petId - ID of pet to return
	 */
	static getPetById(
		petId: number,
	): Promise<Pet> {
		return apiRequest<Pet>({
			method: 'GET',
			url: `/pet/${petId}`,
		});
	}

	/**
	 * @summary Updates a pet in the store with form data
	 * @param {number} petId - ID of pet that needs to be updated
	 * @param {PostPetPetIdFormData} body
	 */
	static updatePetWithForm(
		petId: number,
		body?: PostPetPetIdFormData,
	): Promise<void> {
		const formData = new FormData();
		Object.entries(body ?? {}).forEach(([key, value]) => formData.append(key, value));

		return apiRequest<void>({
			method: 'POST',
			url: `/pet/${petId}`,
			data: formData,
		});
	}

	/**
	 * @summary Deletes a pet
	 * @param {number} petId - Pet id to delete
	 */
	static deletePet(
		petId: number,
	): Promise<void> {
		return apiRequest<void>({
			method: 'DELETE',
			url: `/pet/${petId}`,
		});
	}
}
