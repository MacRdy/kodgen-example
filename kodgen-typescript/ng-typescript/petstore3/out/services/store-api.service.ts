import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { toQueryParams } from '../internals';
import { IGetStoreInventory200Response } from '../models/i-get-store-inventory200-response';
import { IOrder } from '../models/i-order';

/** @description Access to Petstore orders */
@Injectable({ providedIn: 'root' })
export class StoreApiService {
	private readonly baseUrl = '/api/v3';

	constructor(private readonly http: HttpClient) {}

	/**
	 * @summary Returns pet inventories by status
	 * @description Returns a map of status codes to quantities
	 */
	getInventory(
	): Observable<IGetStoreInventory200Response> {
		return this.http.request<IGetStoreInventory200Response>(
			'GET',
			`${this.baseUrl}/store/inventory`,
			{
			},
		);
	}

	/**
	 * @summary Place an order for a pet
	 * @description Place a new order in the store
	 * @param {IOrder} body
	 */
	placeOrder(
		body?: IOrder,
	): Observable<IOrder> {
		return this.http.request<IOrder>(
			'POST',
			`${this.baseUrl}/store/order`,
			{
				body: body,
			},
		);
	}

	/**
	 * @summary Find purchase order by ID
	 * @description For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions.
	 * @param {number} orderId
	 */
	getOrderById(
		orderId: number,
	): Observable<IOrder> {
		return this.http.request<IOrder>(
			'GET',
			`${this.baseUrl}/store/order/${orderId}`,
			{
			},
		);
	}

	/**
	 * @summary Delete purchase order by ID
	 * @description For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
	 * @param {number} orderId
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
}
