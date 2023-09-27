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
	): Observable<LoopbackCount> {
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
			},
		);
	}

	/**
	 * @param {number} id
	 * @param {GetTodosIdQueryParameters} queryParams
	 * @returns (tsType: TodoWithRelations, schemaOptions: { includeRelations: true })
	 */
	findById(
		id: number,
		queryParams: GetTodosIdQueryParameters,
	): Observable<TodoWithRelations> {
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
	): Observable<void> {
		return this.http.request<void>(
			'PUT',
			`${this.baseUrl}/todos/${id}`,
			{
				body: body,
			},
		);
	}

	/** @param {number} id */
	deleteById(
		id: number,
	): Observable<void> {
		return this.http.request<void>(
			'DELETE',
			`${this.baseUrl}/todos/${id}`,
			{
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
	): Observable<void> {
		return this.http.request<void>(
			'PATCH',
			`${this.baseUrl}/todos/${id}`,
			{
				body: body,
			},
		);
	}

	/** @param {GetTodosQueryParameters} queryParams */
	find(
		queryParams: GetTodosQueryParameters,
	): Observable<Array<TodoWithRelations>> {
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
			},
		);
	}

	/** @param {NewTodo} [body] */
	create(
		body?: NewTodo,
	): Observable<Todo> {
		return this.http.request<Todo>(
			'POST',
			`${this.baseUrl}/todos`,
			{
				body: body,
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
	): Observable<LoopbackCount> {
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
			},
		);
	}
}
