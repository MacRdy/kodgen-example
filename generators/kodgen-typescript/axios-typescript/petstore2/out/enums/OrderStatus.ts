/** @description Order Status */
export type OrderStatus =
	| 'placed'
	| 'approved'
	| 'delivered'
;

export const OrderStatus = {
	Placed: 'placed' as OrderStatus,
	Approved: 'approved' as OrderStatus,
	Delivered: 'delivered' as OrderStatus,
} as const;
