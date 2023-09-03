/** @description pet status in the store */
export type PetStatus =
	| 'available'
	| 'pending'
	| 'sold'
;

export const PetStatus = {
	Available: 'available' as PetStatus,
	Pending: 'pending' as PetStatus,
	Sold: 'sold' as PetStatus,
} as const;
