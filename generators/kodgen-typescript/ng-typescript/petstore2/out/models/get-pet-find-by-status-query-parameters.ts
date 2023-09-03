import { GetPetFindByStatusStatusItemQueryParameters } from '../enums/get-pet-find-by-status-status-item-query-parameters';

export interface GetPetFindByStatusQueryParameters {
	/** @description Status values that need to be considered for filter */
	readonly status: Array<GetPetFindByStatusStatusItemQueryParameters>;
}
