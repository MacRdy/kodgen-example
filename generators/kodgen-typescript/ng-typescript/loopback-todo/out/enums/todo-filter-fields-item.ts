export type TodoFilterFieldsItem =
	| 'id'
	| 'title'
	| 'desc'
	| 'isComplete'
	| 'remindAtAddress'
	| 'remindAtGeo'
	| 'tag'
;

export const TodoFilterFieldsItem = {
	Id: 'id' as TodoFilterFieldsItem,
	Title: 'title' as TodoFilterFieldsItem,
	Desc: 'desc' as TodoFilterFieldsItem,
	IsComplete: 'isComplete' as TodoFilterFieldsItem,
	RemindAtAddress: 'remindAtAddress' as TodoFilterFieldsItem,
	RemindAtGeo: 'remindAtGeo' as TodoFilterFieldsItem,
	Tag: 'tag' as TodoFilterFieldsItem,
} as const;
