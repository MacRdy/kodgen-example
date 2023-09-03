
/** @description (tsType: Omit<Todo, 'id'>, schemaOptions: { title: 'NewTodo', exclude: [ 'id' ] }) */
export interface NewTodo {
	readonly title: string;
	readonly desc?: string;
	readonly isComplete?: boolean;
	readonly remindAtAddress?: string;
	readonly remindAtGeo?: string;
	readonly tag?: unknown;
}
