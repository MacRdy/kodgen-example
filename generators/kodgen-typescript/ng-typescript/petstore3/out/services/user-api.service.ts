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
	 * @param {IUser} [body] - Created user object
	 */
	createUser(
		body?: IUser,
		observe?: 'body',
		responseType?: 'json',
	): Observable<IUser>;
	createUser(
		body?: IUser,
		observe?: 'body',
		responseType?: 'blob',
	): Observable<Blob>;
	createUser(
		body?: IUser,
		observe?: 'body',
		responseType?: 'arraybuffer',
	): Observable<ArrayBuffer>;
	createUser(
		body?: IUser,
		observe?: 'body',
		responseType?: 'text',
	): Observable<string>;
	createUser(
		body?: IUser,
		observe?: 'events',
		responseType?: 'json',
		reportProgress?: boolean,
	): Observable<HttpEvent<IUser>>;
	createUser(
		body?: IUser,
		observe?: 'events',
		responseType?: 'blob',
		reportProgress?: boolean,
	): Observable<HttpEvent<Blob>>;
	createUser(
		body?: IUser,
		observe?: 'events',
		responseType?: 'arraybuffer',
		reportProgress?: boolean,
	): Observable<HttpEvent<ArrayBuffer>>;
	createUser(
		body?: IUser,
		observe?: 'events',
		responseType?: 'text',
		reportProgress?: boolean,
	): Observable<HttpEvent<string>>;
	createUser(
		body?: IUser,
		observe: 'body' | 'events' = 'body',
		responseType: 'json' | 'blob' | 'arraybuffer' | 'text' = 'json',
		reportProgress = false,
	): Observable<IUser | Blob | ArrayBuffer | string | HttpEvent<IUser> | HttpEvent<Blob> | HttpEvent<ArrayBuffer> | HttpEvent<string>> {
		return this.http.request<IUser>(
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

	/**
	 * @summary Creates list of users with given input array
	 * @description Creates list of users with given input array
	 * @param {Array<IUser>} [body]
	 */
	createUsersWithListInput(
		body?: Array<IUser>,
		observe?: 'body',
		responseType?: 'json',
	): Observable<IUser>;
	createUsersWithListInput(
		body?: Array<IUser>,
		observe?: 'body',
		responseType?: 'blob',
	): Observable<Blob>;
	createUsersWithListInput(
		body?: Array<IUser>,
		observe?: 'body',
		responseType?: 'arraybuffer',
	): Observable<ArrayBuffer>;
	createUsersWithListInput(
		body?: Array<IUser>,
		observe?: 'body',
		responseType?: 'text',
	): Observable<string>;
	createUsersWithListInput(
		body?: Array<IUser>,
		observe?: 'events',
		responseType?: 'json',
		reportProgress?: boolean,
	): Observable<HttpEvent<IUser>>;
	createUsersWithListInput(
		body?: Array<IUser>,
		observe?: 'events',
		responseType?: 'blob',
		reportProgress?: boolean,
	): Observable<HttpEvent<Blob>>;
	createUsersWithListInput(
		body?: Array<IUser>,
		observe?: 'events',
		responseType?: 'arraybuffer',
		reportProgress?: boolean,
	): Observable<HttpEvent<ArrayBuffer>>;
	createUsersWithListInput(
		body?: Array<IUser>,
		observe?: 'events',
		responseType?: 'text',
		reportProgress?: boolean,
	): Observable<HttpEvent<string>>;
	createUsersWithListInput(
		body?: Array<IUser>,
		observe: 'body' | 'events' = 'body',
		responseType: 'json' | 'blob' | 'arraybuffer' | 'text' = 'json',
		reportProgress = false,
	): Observable<IUser | Blob | ArrayBuffer | string | HttpEvent<IUser> | HttpEvent<Blob> | HttpEvent<ArrayBuffer> | HttpEvent<string>> {
		return this.http.request<IUser>(
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
	 * @summary Logs user into the system
	 * @param {IGetUserLoginQueryParameters} queryParams
	 */
	loginUser(
		queryParams: IGetUserLoginQueryParameters,
		observe?: 'body',
		responseType?: 'text',
	): Observable<string>;
	loginUser(
		queryParams: IGetUserLoginQueryParameters,
		observe?: 'body',
		responseType?: 'blob',
	): Observable<Blob>;
	loginUser(
		queryParams: IGetUserLoginQueryParameters,
		observe?: 'body',
		responseType?: 'arraybuffer',
	): Observable<ArrayBuffer>;
	loginUser(
		queryParams: IGetUserLoginQueryParameters,
		observe?: 'body',
		responseType?: 'text',
	): Observable<string>;
	loginUser(
		queryParams: IGetUserLoginQueryParameters,
		observe?: 'events',
		responseType?: 'json',
		reportProgress?: boolean,
	): Observable<HttpEvent<string>>;
	loginUser(
		queryParams: IGetUserLoginQueryParameters,
		observe?: 'events',
		responseType?: 'blob',
		reportProgress?: boolean,
	): Observable<HttpEvent<Blob>>;
	loginUser(
		queryParams: IGetUserLoginQueryParameters,
		observe?: 'events',
		responseType?: 'arraybuffer',
		reportProgress?: boolean,
	): Observable<HttpEvent<ArrayBuffer>>;
	loginUser(
		queryParams: IGetUserLoginQueryParameters,
		observe?: 'events',
		responseType?: 'text',
		reportProgress?: boolean,
	): Observable<HttpEvent<string>>;
	loginUser(
		queryParams: IGetUserLoginQueryParameters,
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
	 * @summary Get user by user name
	 * @param {string} username
	 */
	getUserByName(
		username: string,
		observe?: 'body',
		responseType?: 'json',
	): Observable<IUser>;
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
	): Observable<HttpEvent<IUser>>;
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
	): Observable<IUser | Blob | ArrayBuffer | string | HttpEvent<IUser> | HttpEvent<Blob> | HttpEvent<ArrayBuffer> | HttpEvent<string>> {
		return this.http.request<IUser>(
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
	 * @summary Update user
	 * @description This can only be done by the logged in user.
	 * @param {string} username
	 * @param {IUser} [body] - Update an existent user in the store
	 */
	updateUser(
		username: string,
		body?: IUser,
		observe?: 'body',
		responseType?: 'json',
	): Observable<void>;
	updateUser(
		username: string,
		body?: IUser,
		observe?: 'body',
		responseType?: 'blob',
	): Observable<Blob>;
	updateUser(
		username: string,
		body?: IUser,
		observe?: 'body',
		responseType?: 'arraybuffer',
	): Observable<ArrayBuffer>;
	updateUser(
		username: string,
		body?: IUser,
		observe?: 'body',
		responseType?: 'text',
	): Observable<string>;
	updateUser(
		username: string,
		body?: IUser,
		observe?: 'events',
		responseType?: 'json',
		reportProgress?: boolean,
	): Observable<HttpEvent<void>>;
	updateUser(
		username: string,
		body?: IUser,
		observe?: 'events',
		responseType?: 'blob',
		reportProgress?: boolean,
	): Observable<HttpEvent<Blob>>;
	updateUser(
		username: string,
		body?: IUser,
		observe?: 'events',
		responseType?: 'arraybuffer',
		reportProgress?: boolean,
	): Observable<HttpEvent<ArrayBuffer>>;
	updateUser(
		username: string,
		body?: IUser,
		observe?: 'events',
		responseType?: 'text',
		reportProgress?: boolean,
	): Observable<HttpEvent<string>>;
	updateUser(
		username: string,
		body?: IUser,
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
	 * @param {string} username
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
}
