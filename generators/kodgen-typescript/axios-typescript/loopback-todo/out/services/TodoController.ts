import { AxiosProgressEvent } from 'axios';

import { apiRequest, toQueryParams } from '../internals';
import { GetTodosCountQueryParameters } from '../models/GetTodosCountQueryParameters';
import { LoopbackCount } from '../models/LoopbackCount';
import { GetTodosIdQueryParameters } from '../models/GetTodosIdQueryParameters';
import { TodoWithRelations } from '../models/TodoWithRelations';
import { Todo } from '../models/Todo';
import { TodoPartial } from '../models/TodoPartial';
import { GetTodosQueryParameters } from '../models/GetTodosQueryParameters';
import { NewTodo } from '../models/NewTodo';
import { PatchTodosQueryParameters } from '../models/PatchTodosQueryParameters';

/**
 * @description Todo model count
 * @param {GetTodosCountQueryParameters} queryParams
 */
export const todoControllerCount = (
	queryParams: GetTodosCountQueryParameters,
): Promise<LoopbackCount> => {
	const params = toQueryParams({
		'where': queryParams.where,
	});

	return apiRequest<LoopbackCount>({
		method: 'GET',
		url: `/todos/count`,
		params,
	});
};

/**
 * @description Todo model instance
 * @param {number} id
 * @param {GetTodosIdQueryParameters} queryParams
 * @returns (tsType: TodoWithRelations, schemaOptions: { includeRelations: true })
 */
export const todoControllerFindById = (
	id: number,
	queryParams: GetTodosIdQueryParameters,
): Promise<TodoWithRelations> => {
	const params = toQueryParams({
		'filter.offset': queryParams.filter?.offset,
		'filter.limit': queryParams.filter?.limit,
		'filter.skip': queryParams.filter?.skip,
		'filter.order': queryParams.filter?.order,
		'filter.fields': queryParams.filter?.fields,
	});

	return apiRequest<TodoWithRelations>({
		method: 'GET',
		url: `/todos/${id}`,
		params,
	});
};

/**
 * @description Todo PUT success
 * @param {number} id
 * @param {Todo} [body]
 */
export const todoControllerReplaceById = (
	id: number,
	body?: Todo,
): Promise<void> => {
	return apiRequest<void>({
		method: 'PUT',
		url: `/todos/${id}`,
		data: body,
	});
};

/**
 * @description Todo DELETE success
 * @param {number} id
 */
export const todoControllerDeleteById = (
	id: number,
): Promise<void> => {
	return apiRequest<void>({
		method: 'DELETE',
		url: `/todos/${id}`,
	});
};

/**
 * @description Todo PATCH success
 * @param {number} id
 * @param {TodoPartial} [body]
 */
export const todoControllerUpdateById = (
	id: number,
	body?: TodoPartial,
): Promise<void> => {
	return apiRequest<void>({
		method: 'PATCH',
		url: `/todos/${id}`,
		data: body,
	});
};

/**
 * @description Array of Todo model instances
 * @param {GetTodosQueryParameters} queryParams
 */
export const todoControllerFind = (
	queryParams: GetTodosQueryParameters,
): Promise<Array<TodoWithRelations>> => {
	const params = toQueryParams({
		'filter.offset': queryParams.filter?.offset,
		'filter.limit': queryParams.filter?.limit,
		'filter.skip': queryParams.filter?.skip,
		'filter.order': queryParams.filter?.order,
		'filter.where': queryParams.filter?.where,
		'filter.fields': queryParams.filter?.fields,
	});

	return apiRequest<Array<TodoWithRelations>>({
		method: 'GET',
		url: `/todos`,
		params,
	});
};

/**
 * @description Todo model instance
 * @param {NewTodo} [body]
 */
export const todoControllerCreate = (
	body?: NewTodo,
): Promise<Todo> => {
	return apiRequest<Todo>({
		method: 'POST',
		url: `/todos`,
		data: body,
	});
};

/**
 * @description Todo PATCH success count
 * @param {PatchTodosQueryParameters} queryParams
 * @param {TodoPartial} [body]
 */
export const todoControllerUpdateAll = (
	queryParams: PatchTodosQueryParameters,
	body?: TodoPartial,
): Promise<LoopbackCount> => {
	const params = toQueryParams({
		'where': queryParams.where,
	});

	return apiRequest<LoopbackCount>({
		method: 'PATCH',
		url: `/todos`,
		params,
		data: body,
	});
};
