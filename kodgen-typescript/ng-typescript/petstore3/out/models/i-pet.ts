// Custom EJS template without JSDoc

import { ICategory } from './i-category';
import { ITag } from './i-tag';
import { PetStatus } from '../enums/pet-status';

export interface IPet {
	readonly id?: number;
	readonly name: string;
	readonly category?: ICategory;
	readonly photoUrls: Array<string>;
	readonly tags?: Array<ITag>;
	/** @description pet status in the store */
	readonly status?: PetStatus;
}
