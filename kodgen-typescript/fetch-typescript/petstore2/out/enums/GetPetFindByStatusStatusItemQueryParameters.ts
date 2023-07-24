export type GetPetFindByStatusStatusItemQueryParameters =
	| 'available'
	| 'pending'
	| 'sold'
;

export const GetPetFindByStatusStatusItemQueryParameters = {
	Available: 'available' as GetPetFindByStatusStatusItemQueryParameters,
	Pending: 'pending' as GetPetFindByStatusStatusItemQueryParameters,
	Sold: 'sold' as GetPetFindByStatusStatusItemQueryParameters,
} as const;
