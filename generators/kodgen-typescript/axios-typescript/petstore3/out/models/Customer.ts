import { Address } from './Address';

export interface Customer {
	readonly id?: number;
	readonly username?: string;
	readonly address?: Array<Address>;
}
