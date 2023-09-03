import { apiRequest, toQueryParams } from '../internals';
import { GetStoreInventory200Response } from '../models/GetStoreInventory200Response';
import { Order } from '../models/Order';

/**
 * @summary Returns pet inventories by status
 * @description Returns a map of status codes to quantities
 * @description successful operation
 */
export const storeGetInventory = (
): Promise<GetStoreInventory200Response> => {
	return apiRequest<GetStoreInventory200Response>({
		method: 'GET',
		url: `/store/inventory`,
	});
}

/**
 * @summary Place an order for a pet
 * @description Place a new order in the store
 * @description successful operation
 * @param {Order} [body]
 */
export const storePlaceOrder = (
	body?: Order,
): Promise<Order> => {
	return apiRequest<Order>({
		method: 'POST',
		url: `/store/order`,
		data: JSON.stringify(body),
	});
}

/**
 * @summary Find purchase order by ID
 * @description For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions.
 * @description successful operation
 * @param {number} orderId
 */
export const storeGetOrderById = (
	orderId: number,
): Promise<Order> => {
	return apiRequest<Order>({
		method: 'GET',
		url: `/store/order/${orderId}`,
	});
}

/**
 * @summary Delete purchase order by ID
 * @description For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
 * @param {number} orderId
 */
export const storeDeleteOrder = (
	orderId: number,
): Promise<void> => {
	return apiRequest<void>({
		method: 'DELETE',
		url: `/store/order/${orderId}`,
	});
}
