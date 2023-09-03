
/** @description (tsType: TodoWithRelations, schemaOptions: { includeRelations: true }) */
export interface TodoWithRelations {
	readonly id?: number;
	readonly title: string;
	readonly desc?: string;
	readonly isComplete?: boolean;
	readonly remindAtAddress?: string;
	readonly remindAtGeo?: string;
	readonly tag?: unknown;
}
