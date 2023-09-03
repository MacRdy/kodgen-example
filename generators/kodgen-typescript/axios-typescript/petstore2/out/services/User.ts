import { AxiosProgressEvent } from 'axios';

import { apiRequest, toQueryParams } from '../internals';
import { User } from '../models/User';
import { GetUserLoginQueryParameters } from '../models/GetUserLoginQueryParameters';

/**
 * @summary Creates list of users with given input array
 * @param {Array<User>} body - List of user object
 */
export const userCreateUsersWithArrayInput = (
	body: Array<User>,
): Promise<void> => {
	return apiRequest<void>({
		method: 'POST',
		url: `/user/createWithArray`,
		data: body,
	});
};

/**
 * @summary Creates list of users with given input array
 * @param {Array<User>} body - List of user object
 */
export const userCreateUsersWithListInput = (
	body: Array<User>,
): Promise<void> => {
	return apiRequest<void>({
		method: 'POST',
		url: `/user/createWithList`,
		data: body,
	});
};

/**
 * @summary Get user by user name
 * @description successful operation
 * @param {string} username - The name that needs to be fetched. Use user1 for testing.
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
 * @summary Updated user
 * @description This can only be done by the logged in user.
 * @param {string} username - name that need to be updated
 * @param {User} body - Updated user object
 */
export const userUpdateUser = (
	username: string,
	body: User,
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
 * @param {string} username - The name that needs to be deleted
 */
export const userDeleteUser = (
	username: string,
): Promise<void> => {
	return apiRequest<void>({
		method: 'DELETE',
		url: `/user/${username}`,
	});
};

/**
 * @summary Logs user into the system
 * @description successful operation
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
 * @summary Create user
 * @description This can only be done by the logged in user.
 * @param {User} body - Created user object
 */
export const userCreateUser = (
	body: User,
): Promise<void> => {
	return apiRequest<void>({
		method: 'POST',
		url: `/user`,
		data: body,
	});
};
