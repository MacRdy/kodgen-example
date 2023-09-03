import { Category } from './category';
import { Tag } from './tag';
import { PetStatus } from '../enums/pet-status';

export interface Pet {
	readonly id?: number;
	readonly category?: Category;
	readonly name: string;
	readonly photoUrls: Array<string>;
	readonly tags?: Array<Tag>;
	/** @description pet status in the store */
	readonly status?: PetStatus;
}
