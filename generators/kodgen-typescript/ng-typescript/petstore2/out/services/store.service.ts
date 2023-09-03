import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { toQueryParams } from '../internals';
import { Order } from '../models/order';
import { GetStoreInventory200Response } from '../models/get-store-inventory200-response';

/** @description Access to Petstore orders */
@Injectable({ providedIn: 'root' })
export class StoreService {
	private readonly baseUrl = 'https://petstore.swagger.io/v2';

	constructor(private readonly http: HttpClient) {}

	/**
	 * @summary Place an order for a pet
	 * @description successful operation
	 * @param {Order} body - order placed for purchasing the pet
	 */
	placeOrder(
		body: Order,
	): Observable<Order> {
		return this.http.request<Order>(
			'POST',
			`${this.baseUrl}/store/order`,
			{
				body: body,
			},
		);
	}

	/**
	 * @summary Find purchase order by ID
	 * @description For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions
	 * @description successful operation
	 * @param {number} orderId - ID of pet that needs to be fetched
	 */
	getOrderById(
		orderId: number,
	): Observable<Order> {
		return this.http.request<Order>(
			'GET',
			`${this.baseUrl}/store/order/${orderId}`,
			{
			},
		);
	}

	/**
	 * @summary Delete purchase order by ID
	 * @description For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors
	 * @param {number} orderId - ID of the order that needs to be deleted
	 */
	deleteOrder(
		orderId: number,
	): Observable<void> {
		return this.http.request<void>(
			'DELETE',
			`${this.baseUrl}/store/order/${orderId}`,
			{
			},
		);
	}

	/**
	 * @summary Returns pet inventories by status
	 * @description Returns a map of status codes to quantities
	 * @description successful operation
	 */
	getInventory(
	): Observable<GetStoreInventory200Response> {
		return this.http.request<GetStoreInventory200Response>(
			'GET',
			`${this.baseUrl}/store/inventory`,
			{
			},
		);
	}
}
