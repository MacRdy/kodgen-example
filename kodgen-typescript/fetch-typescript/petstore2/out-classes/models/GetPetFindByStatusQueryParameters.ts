import { GetPetFindByStatusStatusItemQueryParameters } from '../enums/GetPetFindByStatusStatusItemQueryParameters';

export interface GetPetFindByStatusQueryParameters {
	/** @description Status values that need to be considered for filter */
	readonly status: Array<GetPetFindByStatusStatusItemQueryParameters>;
}
