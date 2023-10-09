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
		observe?: 'body',
		responseType?: 'json',
	): Observable<IGetStoreInventory200Response>;
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
	): Observable<HttpEvent<IGetStoreInventory200Response>>;
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
	): Observable<IGetStoreInventory200Response | Blob | ArrayBuffer | string | HttpEvent<IGetStoreInventory200Response> | HttpEvent<Blob> | HttpEvent<ArrayBuffer> | HttpEvent<string>> {
		return this.http.request<IGetStoreInventory200Response>(
			'GET',
			`${this.baseUrl}/store/inventory`,
			{
				observe: observe as any,
				responseType: responseType as any,
				reportProgress,
			},
		);
	}

	/**
	 * @summary Place an order for a pet
	 * @description Place a new order in the store
	 * @param {IOrder} [body]
	 */
	placeOrder(
		body?: IOrder,
		observe?: 'body',
		responseType?: 'json',
	): Observable<IOrder>;
	placeOrder(
		body?: IOrder,
		observe?: 'body',
		responseType?: 'blob',
	): Observable<Blob>;
	placeOrder(
		body?: IOrder,
		observe?: 'body',
		responseType?: 'arraybuffer',
	): Observable<ArrayBuffer>;
	placeOrder(
		body?: IOrder,
		observe?: 'body',
		responseType?: 'text',
	): Observable<string>;
	placeOrder(
		body?: IOrder,
		observe?: 'events',
		responseType?: 'json',
		reportProgress?: boolean,
	): Observable<HttpEvent<IOrder>>;
	placeOrder(
		body?: IOrder,
		observe?: 'events',
		responseType?: 'blob',
		reportProgress?: boolean,
	): Observable<HttpEvent<Blob>>;
	placeOrder(
		body?: IOrder,
		observe?: 'events',
		responseType?: 'arraybuffer',
		reportProgress?: boolean,
	): Observable<HttpEvent<ArrayBuffer>>;
	placeOrder(
		body?: IOrder,
		observe?: 'events',
		responseType?: 'text',
		reportProgress?: boolean,
	): Observable<HttpEvent<string>>;
	placeOrder(
		body?: IOrder,
		observe: 'body' | 'events' = 'body',
		responseType: 'json' | 'blob' | 'arraybuffer' | 'text' = 'json',
		reportProgress = false,
	): Observable<IOrder | Blob | ArrayBuffer | string | HttpEvent<IOrder> | HttpEvent<Blob> | HttpEvent<ArrayBuffer> | HttpEvent<string>> {
		return this.http.request<IOrder>(
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
	 * @description For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions.
	 * @param {number} orderId
	 */
	getOrderById(
		orderId: number,
		observe?: 'body',
		responseType?: 'json',
	): Observable<IOrder>;
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
	): Observable<HttpEvent<IOrder>>;
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
	): Observable<IOrder | Blob | ArrayBuffer | string | HttpEvent<IOrder> | HttpEvent<Blob> | HttpEvent<ArrayBuffer> | HttpEvent<string>> {
		return this.http.request<IOrder>(
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
	 * @description For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
	 * @param {number} orderId
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
}
