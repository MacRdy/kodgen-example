import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { toQueryParams } from '../internals';
import { IUser } from '../models/i-user';
import { IGetUserLoginQueryParameters } from '../models/i-get-user-login-query-parameters';

/** @description Operations about user */
@Injectable({ providedIn: 'root' })
export class UserApiService {
	private readonly baseUrl = '/api/v3';

	constructor(private readonly http: HttpClient) {}

	/**
	 * @summary Create user
	 * @description This can only be done by the logged in user.
	 * @param {IUser} body - Created user object
	 */
	createUser(
		body?: IUser,
	): Observable<IUser> {
		return this.http.request<IUser>(
			'POST',
			`${this.baseUrl}/user`,
			{
				body: body,
			},
		);
	}

	/**
	 * @summary Creates list of users with given input array
	 * @description Creates list of users with given input array
	 * @param {Array<IUser>} body
	 */
	createUsersWithListInput(
		body?: Array<IUser>,
	): Observable<IUser> {
		return this.http.request<IUser>(
			'POST',
			`${this.baseUrl}/user/createWithList`,
			{
				body: body,
			},
		);
	}

	/**
	 * @summary Logs user into the system
	 * @param {IGetUserLoginQueryParameters} queryParams
	 */
	loginUser(
		queryParams: IGetUserLoginQueryParameters,
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
	 * @summary Get user by user name
	 * @param {string} username
	 */
	getUserByName(
		username: string,
	): Observable<IUser> {
		return this.http.request<IUser>(
			'GET',
			`${this.baseUrl}/user/${username}`,
			{
			},
		);
	}

	/**
	 * @summary Update user
	 * @description This can only be done by the logged in user.
	 * @param {string} username
	 * @param {IUser} body - Update an existent user in the store
	 */
	updateUser(
		username: string,
		body?: IUser,
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
	 * @param {string} username
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
}
