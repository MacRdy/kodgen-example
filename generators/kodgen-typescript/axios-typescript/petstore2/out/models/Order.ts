import { OrderStatus } from '../enums/OrderStatus';

export interface Order {
	readonly id?: number;
	readonly petId?: number;
	readonly quantity?: number;
	readonly shipDate?: string;
	/** @description Order Status */
	readonly status?: OrderStatus;
	readonly complete?: boolean;
}
