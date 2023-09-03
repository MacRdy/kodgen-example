
/** @description (tsType: Partial<Todo>, schemaOptions: { partial: true }) */
export interface TodoPartial {
	readonly id?: number;
	readonly title?: string;
	readonly desc?: string;
	readonly isComplete?: boolean;
	readonly remindAtAddress?: string;
	readonly remindAtGeo?: string;
	readonly tag?: unknown;
}
