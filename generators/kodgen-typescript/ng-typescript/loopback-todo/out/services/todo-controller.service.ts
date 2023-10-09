import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { toQueryParams } from '../internals';
import { GetTodosCountQueryParameters } from '../models/get-todos-count-query-parameters';
import { LoopbackCount } from '../models/loopback-count';
import { GetTodosIdQueryParameters } from '../models/get-todos-id-query-parameters';
import { TodoWithRelations } from '../models/todo-with-relations';
import { Todo } from '../models/todo';
import { TodoPartial } from '../models/todo-partial';
import { GetTodosQueryParameters } from '../models/get-todos-query-parameters';
import { NewTodo } from '../models/new-todo';
import { PatchTodosQueryParameters } from '../models/patch-todos-query-parameters';

@Injectable({ providedIn: 'root' })
export class TodoControllerService {
	private readonly baseUrl = '/';

	constructor(private readonly http: HttpClient) {}

	/** @param {GetTodosCountQueryParameters} queryParams */
	count(
		queryParams: GetTodosCountQueryParameters,
		observe?: 'body',
		responseType?: 'json',
	): Observable<LoopbackCount>;
	count(
		queryParams: GetTodosCountQueryParameters,
		observe?: 'body',
		responseType?: 'blob',
	): Observable<Blob>;
	count(
		queryParams: GetTodosCountQueryParameters,
		observe?: 'body',
		responseType?: 'arraybuffer',
	): Observable<ArrayBuffer>;
	count(
		queryParams: GetTodosCountQueryParameters,
		observe?: 'body',
		responseType?: 'text',
	): Observable<string>;
	count(
		queryParams: GetTodosCountQueryParameters,
		observe?: 'events',
		responseType?: 'json',
		reportProgress?: boolean,
	): Observable<HttpEvent<LoopbackCount>>;
	count(
		queryParams: GetTodosCountQueryParameters,
		observe?: 'events',
		responseType?: 'blob',
		reportProgress?: boolean,
	): Observable<HttpEvent<Blob>>;
	count(
		queryParams: GetTodosCountQueryParameters,
		observe?: 'events',
		responseType?: 'arraybuffer',
		reportProgress?: boolean,
	): Observable<HttpEvent<ArrayBuffer>>;
	count(
		queryParams: GetTodosCountQueryParameters,
		observe?: 'events',
		responseType?: 'text',
		reportProgress?: boolean,
	): Observable<HttpEvent<string>>;
	count(
		queryParams: GetTodosCountQueryParameters,
		observe: 'body' | 'events' = 'body',
		responseType: 'json' | 'blob' | 'arraybuffer' | 'text' = 'json',
		reportProgress = false,
	): Observable<LoopbackCount | Blob | ArrayBuffer | string | HttpEvent<LoopbackCount> | HttpEvent<Blob> | HttpEvent<ArrayBuffer> | HttpEvent<string>> {
		const params = new HttpParams({
			fromString: toQueryParams({
				'where': queryParams.where,
			}),
		});

		return this.http.request<LoopbackCount>(
			'GET',
			`${this.baseUrl}/todos/count`,
			{
				params,
				observe: observe as any,
				responseType: responseType as any,
				reportProgress,
			},
		);
	}

	/**
	 * @param {number} id
	 * @param {GetTodosIdQueryParameters} queryParams
	 */
	findById(
		id: number,
		queryParams: GetTodosIdQueryParameters,
		observe?: 'body',
		responseType?: 'json',
	): Observable<TodoWithRelations>;
	findById(
		id: number,
		queryParams: GetTodosIdQueryParameters,
		observe?: 'body',
		responseType?: 'blob',
	): Observable<Blob>;
	findById(
		id: number,
		queryParams: GetTodosIdQueryParameters,
		observe?: 'body',
		responseType?: 'arraybuffer',
	): Observable<ArrayBuffer>;
	findById(
		id: number,
		queryParams: GetTodosIdQueryParameters,
		observe?: 'body',
		responseType?: 'text',
	): Observable<string>;
	findById(
		id: number,
		queryParams: GetTodosIdQueryParameters,
		observe?: 'events',
		responseType?: 'json',
		reportProgress?: boolean,
	): Observable<HttpEvent<TodoWithRelations>>;
	findById(
		id: number,
		queryParams: GetTodosIdQueryParameters,
		observe?: 'events',
		responseType?: 'blob',
		reportProgress?: boolean,
	): Observable<HttpEvent<Blob>>;
	findById(
		id: number,
		queryParams: GetTodosIdQueryParameters,
		observe?: 'events',
		responseType?: 'arraybuffer',
		reportProgress?: boolean,
	): Observable<HttpEvent<ArrayBuffer>>;
	findById(
		id: number,
		queryParams: GetTodosIdQueryParameters,
		observe?: 'events',
		responseType?: 'text',
		reportProgress?: boolean,
	): Observable<HttpEvent<string>>;
	findById(
		id: number,
		queryParams: GetTodosIdQueryParameters,
		observe: 'body' | 'events' = 'body',
		responseType: 'json' | 'blob' | 'arraybuffer' | 'text' = 'json',
		reportProgress = false,
	): Observable<TodoWithRelations | Blob | ArrayBuffer | string | HttpEvent<TodoWithRelations> | HttpEvent<Blob> | HttpEvent<ArrayBuffer> | HttpEvent<string>> {
		const params = new HttpParams({
			fromString: toQueryParams({
				'filter.offset': queryParams.filter?.offset,
				'filter.limit': queryParams.filter?.limit,
				'filter.skip': queryParams.filter?.skip,
				'filter.order': queryParams.filter?.order,
				'filter.fields': queryParams.filter?.fields,
			}),
		});

		return this.http.request<TodoWithRelations>(
			'GET',
			`${this.baseUrl}/todos/${id}`,
			{
				params,
				observe: observe as any,
				responseType: responseType as any,
				reportProgress,
			},
		);
	}

	/**
	 * @param {number} id
	 * @param {Todo} [body]
	 */
	replaceById(
		id: number,
		body?: Todo,
		observe?: 'body',
		responseType?: 'json',
	): Observable<void>;
	replaceById(
		id: number,
		body?: Todo,
		observe?: 'body',
		responseType?: 'blob',
	): Observable<Blob>;
	replaceById(
		id: number,
		body?: Todo,
		observe?: 'body',
		responseType?: 'arraybuffer',
	): Observable<ArrayBuffer>;
	replaceById(
		id: number,
		body?: Todo,
		observe?: 'body',
		responseType?: 'text',
	): Observable<string>;
	replaceById(
		id: number,
		body?: Todo,
		observe?: 'events',
		responseType?: 'json',
		reportProgress?: boolean,
	): Observable<HttpEvent<void>>;
	replaceById(
		id: number,
		body?: Todo,
		observe?: 'events',
		responseType?: 'blob',
		reportProgress?: boolean,
	): Observable<HttpEvent<Blob>>;
	replaceById(
		id: number,
		body?: Todo,
		observe?: 'events',
		responseType?: 'arraybuffer',
		reportProgress?: boolean,
	): Observable<HttpEvent<ArrayBuffer>>;
	replaceById(
		id: number,
		body?: Todo,
		observe?: 'events',
		responseType?: 'text',
		reportProgress?: boolean,
	): Observable<HttpEvent<string>>;
	replaceById(
		id: number,
		body?: Todo,
		observe: 'body' | 'events' = 'body',
		responseType: 'json' | 'blob' | 'arraybuffer' | 'text' = 'json',
		reportProgress = false,
	): Observable<void | Blob | ArrayBuffer | string | HttpEvent<void> | HttpEvent<Blob> | HttpEvent<ArrayBuffer> | HttpEvent<string>> {
		return this.http.request<void>(
			'PUT',
			`${this.baseUrl}/todos/${id}`,
			{
				body: body,
				observe: observe as any,
				responseType: responseType as any,
				reportProgress,
			},
		);
	}

	/** @param {number} id */
	deleteById(
		id: number,
		observe?: 'body',
		responseType?: 'json',
	): Observable<void>;
	deleteById(
		id: number,
		observe?: 'body',
		responseType?: 'blob',
	): Observable<Blob>;
	deleteById(
		id: number,
		observe?: 'body',
		responseType?: 'arraybuffer',
	): Observable<ArrayBuffer>;
	deleteById(
		id: number,
		observe?: 'body',
		responseType?: 'text',
	): Observable<string>;
	deleteById(
		id: number,
		observe?: 'events',
		responseType?: 'json',
		reportProgress?: boolean,
	): Observable<HttpEvent<void>>;
	deleteById(
		id: number,
		observe?: 'events',
		responseType?: 'blob',
		reportProgress?: boolean,
	): Observable<HttpEvent<Blob>>;
	deleteById(
		id: number,
		observe?: 'events',
		responseType?: 'arraybuffer',
		reportProgress?: boolean,
	): Observable<HttpEvent<ArrayBuffer>>;
	deleteById(
		id: number,
		observe?: 'events',
		responseType?: 'text',
		reportProgress?: boolean,
	): Observable<HttpEvent<string>>;
	deleteById(
		id: number,
		observe: 'body' | 'events' = 'body',
		responseType: 'json' | 'blob' | 'arraybuffer' | 'text' = 'json',
		reportProgress = false,
	): Observable<void | Blob | ArrayBuffer | string | HttpEvent<void> | HttpEvent<Blob> | HttpEvent<ArrayBuffer> | HttpEvent<string>> {
		return this.http.request<void>(
			'DELETE',
			`${this.baseUrl}/todos/${id}`,
			{
				observe: observe as any,
				responseType: responseType as any,
				reportProgress,
			},
		);
	}

	/**
	 * @param {number} id
	 * @param {TodoPartial} [body]
	 */
	updateById(
		id: number,
		body?: TodoPartial,
		observe?: 'body',
		responseType?: 'json',
	): Observable<void>;
	updateById(
		id: number,
		body?: TodoPartial,
		observe?: 'body',
		responseType?: 'blob',
	): Observable<Blob>;
	updateById(
		id: number,
		body?: TodoPartial,
		observe?: 'body',
		responseType?: 'arraybuffer',
	): Observable<ArrayBuffer>;
	updateById(
		id: number,
		body?: TodoPartial,
		observe?: 'body',
		responseType?: 'text',
	): Observable<string>;
	updateById(
		id: number,
		body?: TodoPartial,
		observe?: 'events',
		responseType?: 'json',
		reportProgress?: boolean,
	): Observable<HttpEvent<void>>;
	updateById(
		id: number,
		body?: TodoPartial,
		observe?: 'events',
		responseType?: 'blob',
		reportProgress?: boolean,
	): Observable<HttpEvent<Blob>>;
	updateById(
		id: number,
		body?: TodoPartial,
		observe?: 'events',
		responseType?: 'arraybuffer',
		reportProgress?: boolean,
	): Observable<HttpEvent<ArrayBuffer>>;
	updateById(
		id: number,
		body?: TodoPartial,
		observe?: 'events',
		responseType?: 'text',
		reportProgress?: boolean,
	): Observable<HttpEvent<string>>;
	updateById(
		id: number,
		body?: TodoPartial,
		observe: 'body' | 'events' = 'body',
		responseType: 'json' | 'blob' | 'arraybuffer' | 'text' = 'json',
		reportProgress = false,
	): Observable<void | Blob | ArrayBuffer | string | HttpEvent<void> | HttpEvent<Blob> | HttpEvent<ArrayBuffer> | HttpEvent<string>> {
		return this.http.request<void>(
			'PATCH',
			`${this.baseUrl}/todos/${id}`,
			{
				body: body,
				observe: observe as any,
				responseType: responseType as any,
				reportProgress,
			},
		);
	}

	/** @param {GetTodosQueryParameters} queryParams */
	find(
		queryParams: GetTodosQueryParameters,
		observe?: 'body',
		responseType?: 'json',
	): Observable<Array<TodoWithRelations>>;
	find(
		queryParams: GetTodosQueryParameters,
		observe?: 'body',
		responseType?: 'blob',
	): Observable<Blob>;
	find(
		queryParams: GetTodosQueryParameters,
		observe?: 'body',
		responseType?: 'arraybuffer',
	): Observable<ArrayBuffer>;
	find(
		queryParams: GetTodosQueryParameters,
		observe?: 'body',
		responseType?: 'text',
	): Observable<string>;
	find(
		queryParams: GetTodosQueryParameters,
		observe?: 'events',
		responseType?: 'json',
		reportProgress?: boolean,
	): Observable<HttpEvent<Array<TodoWithRelations>>>;
	find(
		queryParams: GetTodosQueryParameters,
		observe?: 'events',
		responseType?: 'blob',
		reportProgress?: boolean,
	): Observable<HttpEvent<Blob>>;
	find(
		queryParams: GetTodosQueryParameters,
		observe?: 'events',
		responseType?: 'arraybuffer',
		reportProgress?: boolean,
	): Observable<HttpEvent<ArrayBuffer>>;
	find(
		queryParams: GetTodosQueryParameters,
		observe?: 'events',
		responseType?: 'text',
		reportProgress?: boolean,
	): Observable<HttpEvent<string>>;
	find(
		queryParams: GetTodosQueryParameters,
		observe: 'body' | 'events' = 'body',
		responseType: 'json' | 'blob' | 'arraybuffer' | 'text' = 'json',
		reportProgress = false,
	): Observable<Array<TodoWithRelations> | Blob | ArrayBuffer | string | HttpEvent<Array<TodoWithRelations>> | HttpEvent<Blob> | HttpEvent<ArrayBuffer> | HttpEvent<string>> {
		const params = new HttpParams({
			fromString: toQueryParams({
				'filter.offset': queryParams.filter?.offset,
				'filter.limit': queryParams.filter?.limit,
				'filter.skip': queryParams.filter?.skip,
				'filter.order': queryParams.filter?.order,
				'filter.where': queryParams.filter?.where,
				'filter.fields': queryParams.filter?.fields,
			}),
		});

		return this.http.request<Array<TodoWithRelations>>(
			'GET',
			`${this.baseUrl}/todos`,
			{
				params,
				observe: observe as any,
				responseType: responseType as any,
				reportProgress,
			},
		);
	}

	/** @param {NewTodo} [body] */
	create(
		body?: NewTodo,
		observe?: 'body',
		responseType?: 'json',
	): Observable<Todo>;
	create(
		body?: NewTodo,
		observe?: 'body',
		responseType?: 'blob',
	): Observable<Blob>;
	create(
		body?: NewTodo,
		observe?: 'body',
		responseType?: 'arraybuffer',
	): Observable<ArrayBuffer>;
	create(
		body?: NewTodo,
		observe?: 'body',
		responseType?: 'text',
	): Observable<string>;
	create(
		body?: NewTodo,
		observe?: 'events',
		responseType?: 'json',
		reportProgress?: boolean,
	): Observable<HttpEvent<Todo>>;
	create(
		body?: NewTodo,
		observe?: 'events',
		responseType?: 'blob',
		reportProgress?: boolean,
	): Observable<HttpEvent<Blob>>;
	create(
		body?: NewTodo,
		observe?: 'events',
		responseType?: 'arraybuffer',
		reportProgress?: boolean,
	): Observable<HttpEvent<ArrayBuffer>>;
	create(
		body?: NewTodo,
		observe?: 'events',
		responseType?: 'text',
		reportProgress?: boolean,
	): Observable<HttpEvent<string>>;
	create(
		body?: NewTodo,
		observe: 'body' | 'events' = 'body',
		responseType: 'json' | 'blob' | 'arraybuffer' | 'text' = 'json',
		reportProgress = false,
	): Observable<Todo | Blob | ArrayBuffer | string | HttpEvent<Todo> | HttpEvent<Blob> | HttpEvent<ArrayBuffer> | HttpEvent<string>> {
		return this.http.request<Todo>(
			'POST',
			`${this.baseUrl}/todos`,
			{
				body: body,
				observe: observe as any,
				responseType: responseType as any,
				reportProgress,
			},
		);
	}

	/**
	 * @param {PatchTodosQueryParameters} queryParams
	 * @param {TodoPartial} [body]
	 */
	updateAll(
		queryParams: PatchTodosQueryParameters,
		body?: TodoPartial,
		observe?: 'body',
		responseType?: 'json',
	): Observable<LoopbackCount>;
	updateAll(
		queryParams: PatchTodosQueryParameters,
		body?: TodoPartial,
		observe?: 'body',
		responseType?: 'blob',
	): Observable<Blob>;
	updateAll(
		queryParams: PatchTodosQueryParameters,
		body?: TodoPartial,
		observe?: 'body',
		responseType?: 'arraybuffer',
	): Observable<ArrayBuffer>;
	updateAll(
		queryParams: PatchTodosQueryParameters,
		body?: TodoPartial,
		observe?: 'body',
		responseType?: 'text',
	): Observable<string>;
	updateAll(
		queryParams: PatchTodosQueryParameters,
		body?: TodoPartial,
		observe?: 'events',
		responseType?: 'json',
		reportProgress?: boolean,
	): Observable<HttpEvent<LoopbackCount>>;
	updateAll(
		queryParams: PatchTodosQueryParameters,
		body?: TodoPartial,
		observe?: 'events',
		responseType?: 'blob',
		reportProgress?: boolean,
	): Observable<HttpEvent<Blob>>;
	updateAll(
		queryParams: PatchTodosQueryParameters,
		body?: TodoPartial,
		observe?: 'events',
		responseType?: 'arraybuffer',
		reportProgress?: boolean,
	): Observable<HttpEvent<ArrayBuffer>>;
	updateAll(
		queryParams: PatchTodosQueryParameters,
		body?: TodoPartial,
		observe?: 'events',
		responseType?: 'text',
		reportProgress?: boolean,
	): Observable<HttpEvent<string>>;
	updateAll(
		queryParams: PatchTodosQueryParameters,
		body?: TodoPartial,
		observe: 'body' | 'events' = 'body',
		responseType: 'json' | 'blob' | 'arraybuffer' | 'text' = 'json',
		reportProgress = false,
	): Observable<LoopbackCount | Blob | ArrayBuffer | string | HttpEvent<LoopbackCount> | HttpEvent<Blob> | HttpEvent<ArrayBuffer> | HttpEvent<string>> {
		const params = new HttpParams({
			fromString: toQueryParams({
				'where': queryParams.where,
			}),
		});

		return this.http.request<LoopbackCount>(
			'PATCH',
			`${this.baseUrl}/todos`,
			{
				body: body,
				params,
				observe: observe as any,
				responseType: responseType as any,
				reportProgress,
			},
		);
	}
}
