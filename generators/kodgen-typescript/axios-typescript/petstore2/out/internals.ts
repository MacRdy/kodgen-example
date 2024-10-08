import axios, { AxiosProgressEvent, AxiosRequestConfig } from 'axios';

const client = axios.create({
    baseURL: 'https://petstore.swagger.io/v2',
});

export const apiRequest = <T>(config: {
	method: string,
	url: string,
	params?: string,
	data?: unknown,
	responseType?: 'text' | 'json',
	onUploadProgress?: (progressEvent: AxiosProgressEvent) => void,
}): Promise<T> => {
	const { method, url, responseType, data, onUploadProgress, params } = config;

	const axiosConfig: AxiosRequestConfig = {
		method,
		url,
		data,
		responseType,
		onUploadProgress,
	};

	if (params) {
		axiosConfig.params = new URLSearchParams(params);
	}

	return client.request<T>(axiosConfig).then(x => x.data);
}

export const toQueryParams = (params: Record<string, unknown>, prefix?: string): string => {
	const queryParams: string[] = [];

	for (const [key, value] of Object.entries(params)) {
		if (
			(typeof value !== 'string' &&
				typeof value !== 'number' &&
				typeof value !== 'boolean' &&
				typeof value !== 'object') ||
			value == null
		) {
			continue;
		}

		const name = prefix ? `${prefix}[${key}]` : key;

		const param =
			typeof value === 'object'
				? toQueryParams(value as Record<string, unknown>, name)
				: encodeURIComponent(name) + '=' + encodeURIComponent(value);

		queryParams.push(param);
	}

	return queryParams.join('&');
};
