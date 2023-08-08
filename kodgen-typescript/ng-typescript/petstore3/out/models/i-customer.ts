// Custom EJS template without JSDoc

import { IAddress } from './i-address';

// Custom header from templateDataFile
export interface ICustomer {
	readonly id?: number;
	readonly username?: string;
	readonly address?: Array<IAddress>;
}
