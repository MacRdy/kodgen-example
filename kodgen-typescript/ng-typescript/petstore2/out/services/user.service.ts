import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { toQueryParams } from '../internals';
import { User } from '../models/user';
import { GetUserLoginQueryParameters } from '../models/get-user-login-query-parameters';

/** @description Operations about user */
@Injectable({ providedIn: 'root' })
export class UserService {
	private readonly baseUrl = 'https://petstore.swagger.io/v2';

	constructor(private readonly http: HttpClient) {}

	/**
	 * @summary Creates list of users with given input array
	 * @param {Array<User>} body - List of user object
	 */
	createUsersWithArrayInput(
		body: Array<User>,
	): Observable<void> {
		return this.http.request<void>(
			'POST',
			`${this.baseUrl}/user/createWithArray`,
			{
				body: body,
			},
		);
	}

	/**
	 * @summary Creates list of users with given input array
	 * @param {Array<User>} body - List of user object
	 */
	createUsersWithListInput(
		body: Array<User>,
	): Observable<void> {
		return this.http.request<void>(
			'POST',
			`${this.baseUrl}/user/createWithList`,
			{
				body: body,
			},
		);
	}

	/**
	 * @summary Get user by user name
	 * @description successful operation
	 * @param {string} username - The name that needs to be fetched. Use user1 for testing.
	 */
	getUserByName(
		username: string,
	): Observable<User> {
		return this.http.request<User>(
			'GET',
			`${this.baseUrl}/user/${username}`,
			{
			},
		);
	}

	/**
	 * @summary Updated user
	 * @description This can only be done by the logged in user.
	 * @param {string} username - name that need to be updated
	 * @param {User} body - Updated user object
	 */
	updateUser(
		username: string,
		body: User,
	): Observable<void> {
		return this.http.request<void>(
			'PUT',
			`${this.baseUrl}/user/${username}`,
			{
				body: body,
			},
		);
	}

	/**
	 * @summary Delete user
	 * @description This can only be done by the logged in user.
	 * @param {string} username - The name that needs to be deleted
	 */
	deleteUser(
		username: string,
	): Observable<void> {
		return this.http.request<void>(
			'DELETE',
			`${this.baseUrl}/user/${username}`,
			{
			},
		);
	}

	/**
	 * @summary Logs user into the system
	 * @description successful operation
	 * @param {GetUserLoginQueryParameters} queryParams
	 */
	loginUser(
		queryParams: GetUserLoginQueryParameters,
	): Observable<string> {
		const params = new HttpParams({
			fromString: toQueryParams({
				'username': queryParams.username,
				'password': queryParams.password,
			}),
		});

		return this.http.request(
			'GET',
			`${this.baseUrl}/user/login`,
			{
				params,
				responseType: 'text',
			},
		);
	}

	/** @summary Logs out current logged in user session */
	logoutUser(
	): Observable<void> {
		return this.http.request<void>(
			'GET',
			`${this.baseUrl}/user/logout`,
			{
			},
		);
	}

	/**
	 * @summary Create user
	 * @description This can only be done by the logged in user.
	 * @param {User} body - Created user object
	 */
	createUser(
		body: User,
	): Observable<void> {
		return this.http.request<void>(
			'POST',
			`${this.baseUrl}/user`,
			{
				body: body,
			},
		);
	}
}
