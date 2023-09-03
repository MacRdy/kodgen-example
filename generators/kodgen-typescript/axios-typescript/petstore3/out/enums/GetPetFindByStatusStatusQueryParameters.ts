export type GetPetFindByStatusStatusQueryParameters =
	| 'available'
	| 'pending'
	| 'sold'
;

export const GetPetFindByStatusStatusQueryParameters = {
	Available: 'available' as GetPetFindByStatusStatusQueryParameters,
	Pending: 'pending' as GetPetFindByStatusStatusQueryParameters,
	Sold: 'sold' as GetPetFindByStatusStatusQueryParameters,
} as const;
