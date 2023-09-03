// Custom EJS template without JSDoc

import { OrderStatus } from '../enums/order-status';

// Custom header from templateDataFile
export interface IOrder {
	readonly id?: number;
	readonly petId?: number;
	readonly quantity?: number;
	readonly shipDate?: string;
	/** @description Order Status */
	readonly status?: OrderStatus;
	readonly complete?: boolean;
}
