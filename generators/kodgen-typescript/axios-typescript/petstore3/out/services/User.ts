import { AxiosProgressEvent } from 'axios';

import { apiRequest, toQueryParams } from '../internals';
import { User } from '../models/User';
import { GetUserLoginQueryParameters } from '../models/GetUserLoginQueryParameters';

/**
 * @summary Create user
 * @description This can only be done by the logged in user.
 * @param {User} [body] - Created user object
 */
export const userCreateUser = (
	body?: User,
): Promise<User> => {
	return apiRequest<User>({
		method: 'POST',
		url: `/user`,
		data: body,
	});
};

/**
 * @summary Creates list of users with given input array
 * @description Creates list of users with given input array
 * @param {Array<User>} [body]
 */
export const userCreateUsersWithListInput = (
	body?: Array<User>,
): Promise<User> => {
	return apiRequest<User>({
		method: 'POST',
		url: `/user/createWithList`,
		data: body,
	});
};

/**
 * @summary Logs user into the system
 * @param {GetUserLoginQueryParameters} queryParams
 */
export const userLoginUser = (
	queryParams: GetUserLoginQueryParameters,
): Promise<string> => {
	const params = toQueryParams({
		'username': queryParams.username,
		'password': queryParams.password,
	});

	return apiRequest({
		method: 'GET',
		url: `/user/login`,
		params,
		responseType: 'text',
	});
};

/** @summary Logs out current logged in user session */
export const userLogoutUser = (
): Promise<void> => {
	return apiRequest<void>({
		method: 'GET',
		url: `/user/logout`,
	});
};

/**
 * @summary Get user by user name
 * @param {string} username
 */
export const userGetUserByName = (
	username: string,
): Promise<User> => {
	return apiRequest<User>({
		method: 'GET',
		url: `/user/${username}`,
	});
};

/**
 * @summary Update user
 * @description This can only be done by the logged in user.
 * @param {string} username
 * @param {User} [body] - Update an existent user in the store
 */
export const userUpdateUser = (
	username: string,
	body?: User,
): Promise<void> => {
	return apiRequest<void>({
		method: 'PUT',
		url: `/user/${username}`,
		data: body,
	});
};

/**
 * @summary Delete user
 * @description This can only be done by the logged in user.
 * @param {string} username
 */
export const userDeleteUser = (
	username: string,
): Promise<void> => {
	return apiRequest<void>({
		method: 'DELETE',
		url: `/user/${username}`,
	});
};
