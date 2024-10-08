const baseUrl = 'https://petstore.swagger.io/v2';

export const apiRequest = <T>(config: {
	method: string,
	url: string,
	params?: string,
	data?: unknown,
	responseType?: 'text',
}): Promise<T> => {
	const { method, url, responseType, data, params } = config;

	const fetchUrl = params ? `${url}?${params}` : url;

	return fetch(`${baseUrl}${fetchUrl}`, { method, data })
		.then(res => {
			if (!res.ok) {
				throw new Error(`HTTP Error (${res.status}: ${res.statusText})`);
			}

			return responseType === 'text' ? res.text() : res.json();
		});
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
