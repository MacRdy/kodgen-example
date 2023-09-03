import { apiRequest, toQueryParams } from '../internals';
import { Order } from '../models/Order';
import { GetStoreInventory200Response } from '../models/GetStoreInventory200Response';

/**
 * @summary Place an order for a pet
 * @description successful operation
 * @param {Order} body - order placed for purchasing the pet
 */
export const storePlaceOrder = (
	body: Order,
): Promise<Order> => {
	return apiRequest<Order>({
		method: 'POST',
		url: `/store/order`,
		data: JSON.stringify(body),
	});
}

/**
 * @summary Find purchase order by ID
 * @description For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions
 * @description successful operation
 * @param {number} orderId - ID of pet that needs to be fetched
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
 * @description For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors
 * @param {number} orderId - ID of the order that needs to be deleted
 */
export const storeDeleteOrder = (
	orderId: number,
): Promise<void> => {
	return apiRequest<void>({
		method: 'DELETE',
		url: `/store/order/${orderId}`,
	});
}

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
