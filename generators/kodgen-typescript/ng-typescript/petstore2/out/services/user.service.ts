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
		observe?: 'body',
		responseType?: 'json',
	): Observable<void>;
	createUsersWithArrayInput(
		body: Array<User>,
		observe?: 'body',
		responseType?: 'blob',
	): Observable<Blob>;
	createUsersWithArrayInput(
		body: Array<User>,
		observe?: 'body',
		responseType?: 'arraybuffer',
	): Observable<ArrayBuffer>;
	createUsersWithArrayInput(
		body: Array<User>,
		observe?: 'body',
		responseType?: 'text',
	): Observable<string>;
	createUsersWithArrayInput(
		body: Array<User>,
		observe?: 'events',
		responseType?: 'json',
		reportProgress?: boolean,
	): Observable<HttpEvent<void>>;
	createUsersWithArrayInput(
		body: Array<User>,
		observe?: 'events',
		responseType?: 'blob',
		reportProgress?: boolean,
	): Observable<HttpEvent<Blob>>;
	createUsersWithArrayInput(
		body: Array<User>,
		observe?: 'events',
		responseType?: 'arraybuffer',
		reportProgress?: boolean,
	): Observable<HttpEvent<ArrayBuffer>>;
	createUsersWithArrayInput(
		body: Array<User>,
		observe?: 'events',
		responseType?: 'text',
		reportProgress?: boolean,
	): Observable<HttpEvent<string>>;
	createUsersWithArrayInput(
		body: Array<User>,
		observe: 'body' | 'events' = 'body',
		responseType: 'json' | 'blob' | 'arraybuffer' | 'text' = 'json',
		reportProgress = false,
	): Observable<void | Blob | ArrayBuffer | string | HttpEvent<void> | HttpEvent<Blob> | HttpEvent<ArrayBuffer> | HttpEvent<string>> {
		return this.http.request<void>(
			'POST',
			`${this.baseUrl}/user/createWithArray`,
			{
				body: body,
				observe: observe as any,
				responseType: responseType as any,
				reportProgress,
			},
		);
	}

	/**
	 * @summary Creates list of users with given input array
	 * @param {Array<User>} body - List of user object
	 */
	createUsersWithListInput(
		body: Array<User>,
		observe?: 'body',
		responseType?: 'json',
	): Observable<void>;
	createUsersWithListInput(
		body: Array<User>,
		observe?: 'body',
		responseType?: 'blob',
	): Observable<Blob>;
	createUsersWithListInput(
		body: Array<User>,
		observe?: 'body',
		responseType?: 'arraybuffer',
	): Observable<ArrayBuffer>;
	createUsersWithListInput(
		body: Array<User>,
		observe?: 'body',
		responseType?: 'text',
	): Observable<string>;
	createUsersWithListInput(
		body: Array<User>,
		observe?: 'events',
		responseType?: 'json',
		reportProgress?: boolean,
	): Observable<HttpEvent<void>>;
	createUsersWithListInput(
		body: Array<User>,
		observe?: 'events',
		responseType?: 'blob',
		reportProgress?: boolean,
	): Observable<HttpEvent<Blob>>;
	createUsersWithListInput(
		body: Array<User>,
		observe?: 'events',
		responseType?: 'arraybuffer',
		reportProgress?: boolean,
	): Observable<HttpEvent<ArrayBuffer>>;
	createUsersWithListInput(
		body: Array<User>,
		observe?: 'events',
		responseType?: 'text',
		reportProgress?: boolean,
	): Observable<HttpEvent<string>>;
	createUsersWithListInput(
		body: Array<User>,
		observe: 'body' | 'events' = 'body',
		responseType: 'json' | 'blob' | 'arraybuffer' | 'text' = 'json',
		reportProgress = false,
	): Observable<void | Blob | ArrayBuffer | string | HttpEvent<void> | HttpEvent<Blob> | HttpEvent<ArrayBuffer> | HttpEvent<string>> {
		return this.http.request<void>(
			'POST',
			`${this.baseUrl}/user/createWithList`,
			{
				body: body,
				observe: observe as any,
				responseType: responseType as any,
				reportProgress,
			},
		);
	}

	/**
	 * @summary Get user by user name
	 * @param {string} username - The name that needs to be fetched. Use user1 for testing.
	 */
	getUserByName(
		username: string,
		observe?: 'body',
		responseType?: 'json',
	): Observable<User>;
	getUserByName(
		username: string,
		observe?: 'body',
		responseType?: 'blob',
	): Observable<Blob>;
	getUserByName(
		username: string,
		observe?: 'body',
		responseType?: 'arraybuffer',
	): Observable<ArrayBuffer>;
	getUserByName(
		username: string,
		observe?: 'body',
		responseType?: 'text',
	): Observable<string>;
	getUserByName(
		username: string,
		observe?: 'events',
		responseType?: 'json',
		reportProgress?: boolean,
	): Observable<HttpEvent<User>>;
	getUserByName(
		username: string,
		observe?: 'events',
		responseType?: 'blob',
		reportProgress?: boolean,
	): Observable<HttpEvent<Blob>>;
	getUserByName(
		username: string,
		observe?: 'events',
		responseType?: 'arraybuffer',
		reportProgress?: boolean,
	): Observable<HttpEvent<ArrayBuffer>>;
	getUserByName(
		username: string,
		observe?: 'events',
		responseType?: 'text',
		reportProgress?: boolean,
	): Observable<HttpEvent<string>>;
	getUserByName(
		username: string,
		observe: 'body' | 'events' = 'body',
		responseType: 'json' | 'blob' | 'arraybuffer' | 'text' = 'json',
		reportProgress = false,
	): Observable<User | Blob | ArrayBuffer | string | HttpEvent<User> | HttpEvent<Blob> | HttpEvent<ArrayBuffer> | HttpEvent<string>> {
		return this.http.request<User>(
			'GET',
			`${this.baseUrl}/user/${username}`,
			{
				observe: observe as any,
				responseType: responseType as any,
				reportProgress,
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
		observe?: 'body',
		responseType?: 'json',
	): Observable<void>;
	updateUser(
		username: string,
		body: User,
		observe?: 'body',
		responseType?: 'blob',
	): Observable<Blob>;
	updateUser(
		username: string,
		body: User,
		observe?: 'body',
		responseType?: 'arraybuffer',
	): Observable<ArrayBuffer>;
	updateUser(
		username: string,
		body: User,
		observe?: 'body',
		responseType?: 'text',
	): Observable<string>;
	updateUser(
		username: string,
		body: User,
		observe?: 'events',
		responseType?: 'json',
		reportProgress?: boolean,
	): Observable<HttpEvent<void>>;
	updateUser(
		username: string,
		body: User,
		observe?: 'events',
		responseType?: 'blob',
		reportProgress?: boolean,
	): Observable<HttpEvent<Blob>>;
	updateUser(
		username: string,
		body: User,
		observe?: 'events',
		responseType?: 'arraybuffer',
		reportProgress?: boolean,
	): Observable<HttpEvent<ArrayBuffer>>;
	updateUser(
		username: string,
		body: User,
		observe?: 'events',
		responseType?: 'text',
		reportProgress?: boolean,
	): Observable<HttpEvent<string>>;
	updateUser(
		username: string,
		body: User,
		observe: 'body' | 'events' = 'body',
		responseType: 'json' | 'blob' | 'arraybuffer' | 'text' = 'json',
		reportProgress = false,
	): Observable<void | Blob | ArrayBuffer | string | HttpEvent<void> | HttpEvent<Blob> | HttpEvent<ArrayBuffer> | HttpEvent<string>> {
		return this.http.request<void>(
			'PUT',
			`${this.baseUrl}/user/${username}`,
			{
				body: body,
				observe: observe as any,
				responseType: responseType as any,
				reportProgress,
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
		observe?: 'body',
		responseType?: 'json',
	): Observable<void>;
	deleteUser(
		username: string,
		observe?: 'body',
		responseType?: 'blob',
	): Observable<Blob>;
	deleteUser(
		username: string,
		observe?: 'body',
		responseType?: 'arraybuffer',
	): Observable<ArrayBuffer>;
	deleteUser(
		username: string,
		observe?: 'body',
		responseType?: 'text',
	): Observable<string>;
	deleteUser(
		username: string,
		observe?: 'events',
		responseType?: 'json',
		reportProgress?: boolean,
	): Observable<HttpEvent<void>>;
	deleteUser(
		username: string,
		observe?: 'events',
		responseType?: 'blob',
		reportProgress?: boolean,
	): Observable<HttpEvent<Blob>>;
	deleteUser(
		username: string,
		observe?: 'events',
		responseType?: 'arraybuffer',
		reportProgress?: boolean,
	): Observable<HttpEvent<ArrayBuffer>>;
	deleteUser(
		username: string,
		observe?: 'events',
		responseType?: 'text',
		reportProgress?: boolean,
	): Observable<HttpEvent<string>>;
	deleteUser(
		username: string,
		observe: 'body' | 'events' = 'body',
		responseType: 'json' | 'blob' | 'arraybuffer' | 'text' = 'json',
		reportProgress = false,
	): Observable<void | Blob | ArrayBuffer | string | HttpEvent<void> | HttpEvent<Blob> | HttpEvent<ArrayBuffer> | HttpEvent<string>> {
		return this.http.request<void>(
			'DELETE',
			`${this.baseUrl}/user/${username}`,
			{
				observe: observe as any,
				responseType: responseType as any,
				reportProgress,
			},
		);
	}

	/**
	 * @summary Logs user into the system
	 * @param {GetUserLoginQueryParameters} queryParams
	 */
	loginUser(
		queryParams: GetUserLoginQueryParameters,
		observe?: 'body',
		responseType?: 'text',
	): Observable<string>;
	loginUser(
		queryParams: GetUserLoginQueryParameters,
		observe?: 'body',
		responseType?: 'blob',
	): Observable<Blob>;
	loginUser(
		queryParams: GetUserLoginQueryParameters,
		observe?: 'body',
		responseType?: 'arraybuffer',
	): Observable<ArrayBuffer>;
	loginUser(
		queryParams: GetUserLoginQueryParameters,
		observe?: 'body',
		responseType?: 'text',
	): Observable<string>;
	loginUser(
		queryParams: GetUserLoginQueryParameters,
		observe?: 'events',
		responseType?: 'json',
		reportProgress?: boolean,
	): Observable<HttpEvent<string>>;
	loginUser(
		queryParams: GetUserLoginQueryParameters,
		observe?: 'events',
		responseType?: 'blob',
		reportProgress?: boolean,
	): Observable<HttpEvent<Blob>>;
	loginUser(
		queryParams: GetUserLoginQueryParameters,
		observe?: 'events',
		responseType?: 'arraybuffer',
		reportProgress?: boolean,
	): Observable<HttpEvent<ArrayBuffer>>;
	loginUser(
		queryParams: GetUserLoginQueryParameters,
		observe?: 'events',
		responseType?: 'text',
		reportProgress?: boolean,
	): Observable<HttpEvent<string>>;
	loginUser(
		queryParams: GetUserLoginQueryParameters,
		observe: 'body' | 'events' = 'body',
		responseType: 'json' | 'blob' | 'arraybuffer' | 'text' = 'text',
		reportProgress = false,
	): Observable<string | Blob | ArrayBuffer | string | HttpEvent<string> | HttpEvent<Blob> | HttpEvent<ArrayBuffer> | HttpEvent<string>> {
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
				observe: observe as any,
				responseType: responseType as any,
				reportProgress,
			},
		);
	}

	/** @summary Logs out current logged in user session */
	logoutUser(
		observe?: 'body',
		responseType?: 'json',
	): Observable<void>;
	logoutUser(
		observe?: 'body',
		responseType?: 'blob',
	): Observable<Blob>;
	logoutUser(
		observe?: 'body',
		responseType?: 'arraybuffer',
	): Observable<ArrayBuffer>;
	logoutUser(
		observe?: 'body',
		responseType?: 'text',
	): Observable<string>;
	logoutUser(
		observe?: 'events',
		responseType?: 'json',
		reportProgress?: boolean,
	): Observable<HttpEvent<void>>;
	logoutUser(
		observe?: 'events',
		responseType?: 'blob',
		reportProgress?: boolean,
	): Observable<HttpEvent<Blob>>;
	logoutUser(
		observe?: 'events',
		responseType?: 'arraybuffer',
		reportProgress?: boolean,
	): Observable<HttpEvent<ArrayBuffer>>;
	logoutUser(
		observe?: 'events',
		responseType?: 'text',
		reportProgress?: boolean,
	): Observable<HttpEvent<string>>;
	logoutUser(
		observe: 'body' | 'events' = 'body',
		responseType: 'json' | 'blob' | 'arraybuffer' | 'text' = 'json',
		reportProgress = false,
	): Observable<void | Blob | ArrayBuffer | string | HttpEvent<void> | HttpEvent<Blob> | HttpEvent<ArrayBuffer> | HttpEvent<string>> {
		return this.http.request<void>(
			'GET',
			`${this.baseUrl}/user/logout`,
			{
				observe: observe as any,
				responseType: responseType as any,
				reportProgress,
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
		observe?: 'body',
		responseType?: 'json',
	): Observable<void>;
	createUser(
		body: User,
		observe?: 'body',
		responseType?: 'blob',
	): Observable<Blob>;
	createUser(
		body: User,
		observe?: 'body',
		responseType?: 'arraybuffer',
	): Observable<ArrayBuffer>;
	createUser(
		body: User,
		observe?: 'body',
		responseType?: 'text',
	): Observable<string>;
	createUser(
		body: User,
		observe?: 'events',
		responseType?: 'json',
		reportProgress?: boolean,
	): Observable<HttpEvent<void>>;
	createUser(
		body: User,
		observe?: 'events',
		responseType?: 'blob',
		reportProgress?: boolean,
	): Observable<HttpEvent<Blob>>;
	createUser(
		body: User,
		observe?: 'events',
		responseType?: 'arraybuffer',
		reportProgress?: boolean,
	): Observable<HttpEvent<ArrayBuffer>>;
	createUser(
		body: User,
		observe?: 'events',
		responseType?: 'text',
		reportProgress?: boolean,
	): Observable<HttpEvent<string>>;
	createUser(
		body: User,
		observe: 'body' | 'events' = 'body',
		responseType: 'json' | 'blob' | 'arraybuffer' | 'text' = 'json',
		reportProgress = false,
	): Observable<void | Blob | ArrayBuffer | string | HttpEvent<void> | HttpEvent<Blob> | HttpEvent<ArrayBuffer> | HttpEvent<string>> {
		return this.http.request<void>(
			'POST',
			`${this.baseUrl}/user`,
			{
				body: body,
				observe: observe as any,
				responseType: responseType as any,
				reportProgress,
			},
		);
	}
}
