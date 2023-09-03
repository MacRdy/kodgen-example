export type TodoFilter1FieldsItem =
	| 'id'
	| 'title'
	| 'desc'
	| 'isComplete'
	| 'remindAtAddress'
	| 'remindAtGeo'
	| 'tag'
;

export const TodoFilter1FieldsItem = {
	Id: 'id' as TodoFilter1FieldsItem,
	Title: 'title' as TodoFilter1FieldsItem,
	Desc: 'desc' as TodoFilter1FieldsItem,
	IsComplete: 'isComplete' as TodoFilter1FieldsItem,
	RemindAtAddress: 'remindAtAddress' as TodoFilter1FieldsItem,
	RemindAtGeo: 'remindAtGeo' as TodoFilter1FieldsItem,
	Tag: 'tag' as TodoFilter1FieldsItem,
} as const;
