import { apiRequest, toQueryParams } from '../internals';
import { User } from '../models/User';
import { GetUserLoginQueryParameters } from '../models/GetUserLoginQueryParameters';

/** @description Operations about user */
export class UserApi {

	/**
	 * @summary Creates list of users with given input array
	 * @param {Array<User>} body - List of user object
	 */
	static createUsersWithArrayInput(
		body: Array<User>,
	): Promise<void> {
		return apiRequest<void>({
			method: 'POST',
			url: `/user/createWithArray`,
			data: body,
		});
	}

	/**
	 * @summary Creates list of users with given input array
	 * @param {Array<User>} body - List of user object
	 */
	static createUsersWithListInput(
		body: Array<User>,
	): Promise<void> {
		return apiRequest<void>({
			method: 'POST',
			url: `/user/createWithList`,
			data: body,
		});
	}

	/**
	 * @summary Get user by user name
	 * @param {string} username - The name that needs to be fetched. Use user1 for testing.
	 */
	static getUserByName(
		username: string,
	): Promise<User> {
		return apiRequest<User>({
			method: 'GET',
			url: `/user/${username}`,
		});
	}

	/**
	 * @summary Updated user
	 * @description This can only be done by the logged in user.
	 * @param {string} username - name that need to be updated
	 * @param {User} body - Updated user object
	 */
	static updateUser(
		username: string,
		body: User,
	): Promise<void> {
		return apiRequest<void>({
			method: 'PUT',
			url: `/user/${username}`,
			data: body,
		});
	}

	/**
	 * @summary Delete user
	 * @description This can only be done by the logged in user.
	 * @param {string} username - The name that needs to be deleted
	 */
	static deleteUser(
		username: string,
	): Promise<void> {
		return apiRequest<void>({
			method: 'DELETE',
			url: `/user/${username}`,
		});
	}

	/**
	 * @summary Logs user into the system
	 * @param {GetUserLoginQueryParameters} queryParams
	 */
	static loginUser(
		queryParams: GetUserLoginQueryParameters,
	): Promise<string> {
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
	}

	/** @summary Logs out current logged in user session */
	static logoutUser(
	): Promise<void> {
		return apiRequest<void>({
			method: 'GET',
			url: `/user/logout`,
		});
	}

	/**
	 * @summary Create user
	 * @description This can only be done by the logged in user.
	 * @param {User} body - Created user object
	 */
	static createUser(
		body: User,
	): Promise<void> {
		return apiRequest<void>({
			method: 'POST',
			url: `/user`,
			data: body,
		});
	}
}
