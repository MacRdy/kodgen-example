import { Category } from './Category';
import { Tag } from './Tag';
import { PetStatus } from '../enums/PetStatus';

export interface Pet {
	readonly id?: number;
	readonly name: string;
	readonly category?: Category;
	readonly photoUrls: Array<string>;
	readonly tags?: Array<Tag>;
	/** @description pet status in the store */
	readonly status?: PetStatus;
}
