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
	 * @param {Order} body - order placed for purchasing the pet
	 */
	placeOrder(
		body: Order,
		observe?: 'body',
		responseType?: 'json',
	): Observable<Order>;
	placeOrder(
		body: Order,
		observe?: 'body',
		responseType?: 'blob',
	): Observable<Blob>;
	placeOrder(
		body: Order,
		observe?: 'body',
		responseType?: 'arraybuffer',
	): Observable<ArrayBuffer>;
	placeOrder(
		body: Order,
		observe?: 'body',
		responseType?: 'text',
	): Observable<string>;
	placeOrder(
		body: Order,
		observe?: 'events',
		responseType?: 'json',
		reportProgress?: boolean,
	): Observable<HttpEvent<Order>>;
	placeOrder(
		body: Order,
		observe?: 'events',
		responseType?: 'blob',
		reportProgress?: boolean,
	): Observable<HttpEvent<Blob>>;
	placeOrder(
		body: Order,
		observe?: 'events',
		responseType?: 'arraybuffer',
		reportProgress?: boolean,
	): Observable<HttpEvent<ArrayBuffer>>;
	placeOrder(
		body: Order,
		observe?: 'events',
		responseType?: 'text',
		reportProgress?: boolean,
	): Observable<HttpEvent<string>>;
	placeOrder(
		body: Order,
		observe: 'body' | 'events' = 'body',
		responseType: 'json' | 'blob' | 'arraybuffer' | 'text' = 'json',
		reportProgress = false,
	): Observable<Order | Blob | ArrayBuffer | string | HttpEvent<Order> | HttpEvent<Blob> | HttpEvent<ArrayBuffer> | HttpEvent<string>> {
		return this.http.request<Order>(
			'POST',
			`${this.baseUrl}/store/order`,
			{
				body: body,
				observe: observe as any,
				responseType: responseType as any,
				reportProgress,
			},
		);
	}

	/**
	 * @summary Find purchase order by ID
	 * @description For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions
	 * @param {number} orderId - ID of pet that needs to be fetched
	 */
	getOrderById(
		orderId: number,
		observe?: 'body',
		responseType?: 'json',
	): Observable<Order>;
	getOrderById(
		orderId: number,
		observe?: 'body',
		responseType?: 'blob',
	): Observable<Blob>;
	getOrderById(
		orderId: number,
		observe?: 'body',
		responseType?: 'arraybuffer',
	): Observable<ArrayBuffer>;
	getOrderById(
		orderId: number,
		observe?: 'body',
		responseType?: 'text',
	): Observable<string>;
	getOrderById(
		orderId: number,
		observe?: 'events',
		responseType?: 'json',
		reportProgress?: boolean,
	): Observable<HttpEvent<Order>>;
	getOrderById(
		orderId: number,
		observe?: 'events',
		responseType?: 'blob',
		reportProgress?: boolean,
	): Observable<HttpEvent<Blob>>;
	getOrderById(
		orderId: number,
		observe?: 'events',
		responseType?: 'arraybuffer',
		reportProgress?: boolean,
	): Observable<HttpEvent<ArrayBuffer>>;
	getOrderById(
		orderId: number,
		observe?: 'events',
		responseType?: 'text',
		reportProgress?: boolean,
	): Observable<HttpEvent<string>>;
	getOrderById(
		orderId: number,
		observe: 'body' | 'events' = 'body',
		responseType: 'json' | 'blob' | 'arraybuffer' | 'text' = 'json',
		reportProgress = false,
	): Observable<Order | Blob | ArrayBuffer | string | HttpEvent<Order> | HttpEvent<Blob> | HttpEvent<ArrayBuffer> | HttpEvent<string>> {
		return this.http.request<Order>(
			'GET',
			`${this.baseUrl}/store/order/${orderId}`,
			{
				observe: observe as any,
				responseType: responseType as any,
				reportProgress,
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
		observe?: 'body',
		responseType?: 'json',
	): Observable<void>;
	deleteOrder(
		orderId: number,
		observe?: 'body',
		responseType?: 'blob',
	): Observable<Blob>;
	deleteOrder(
		orderId: number,
		observe?: 'body',
		responseType?: 'arraybuffer',
	): Observable<ArrayBuffer>;
	deleteOrder(
		orderId: number,
		observe?: 'body',
		responseType?: 'text',
	): Observable<string>;
	deleteOrder(
		orderId: number,
		observe?: 'events',
		responseType?: 'json',
		reportProgress?: boolean,
	): Observable<HttpEvent<void>>;
	deleteOrder(
		orderId: number,
		observe?: 'events',
		responseType?: 'blob',
		reportProgress?: boolean,
	): Observable<HttpEvent<Blob>>;
	deleteOrder(
		orderId: number,
		observe?: 'events',
		responseType?: 'arraybuffer',
		reportProgress?: boolean,
	): Observable<HttpEvent<ArrayBuffer>>;
	deleteOrder(
		orderId: number,
		observe?: 'events',
		responseType?: 'text',
		reportProgress?: boolean,
	): Observable<HttpEvent<string>>;
	deleteOrder(
		orderId: number,
		observe: 'body' | 'events' = 'body',
		responseType: 'json' | 'blob' | 'arraybuffer' | 'text' = 'json',
		reportProgress = false,
	): Observable<void | Blob | ArrayBuffer | string | HttpEvent<void> | HttpEvent<Blob> | HttpEvent<ArrayBuffer> | HttpEvent<string>> {
		return this.http.request<void>(
			'DELETE',
			`${this.baseUrl}/store/order/${orderId}`,
			{
				observe: observe as any,
				responseType: responseType as any,
				reportProgress,
			},
		);
	}

	/**
	 * @summary Returns pet inventories by status
	 * @description Returns a map of status codes to quantities
	 */
	getInventory(
		observe?: 'body',
		responseType?: 'json',
	): Observable<GetStoreInventory200Response>;
	getInventory(
		observe?: 'body',
		responseType?: 'blob',
	): Observable<Blob>;
	getInventory(
		observe?: 'body',
		responseType?: 'arraybuffer',
	): Observable<ArrayBuffer>;
	getInventory(
		observe?: 'body',
		responseType?: 'text',
	): Observable<string>;
	getInventory(
		observe?: 'events',
		responseType?: 'json',
		reportProgress?: boolean,
	): Observable<HttpEvent<GetStoreInventory200Response>>;
	getInventory(
		observe?: 'events',
		responseType?: 'blob',
		reportProgress?: boolean,
	): Observable<HttpEvent<Blob>>;
	getInventory(
		observe?: 'events',
		responseType?: 'arraybuffer',
		reportProgress?: boolean,
	): Observable<HttpEvent<ArrayBuffer>>;
	getInventory(
		observe?: 'events',
		responseType?: 'text',
		reportProgress?: boolean,
	): Observable<HttpEvent<string>>;
	getInventory(
		observe: 'body' | 'events' = 'body',
		responseType: 'json' | 'blob' | 'arraybuffer' | 'text' = 'json',
		reportProgress = false,
	): Observable<GetStoreInventory200Response | Blob | ArrayBuffer | string | HttpEvent<GetStoreInventory200Response> | HttpEvent<Blob> | HttpEvent<ArrayBuffer> | HttpEvent<string>> {
		return this.http.request<GetStoreInventory200Response>(
			'GET',
			`${this.baseUrl}/store/inventory`,
			{
				observe: observe as any,
				responseType: responseType as any,
				reportProgress,
			},
		);
	}
}
