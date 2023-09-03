import { TodoFilter1Where } from './todo-filter1-where';
import { TodoFilter1Fields } from './todo-filter1-fields';
import { TodoFilter1FieldsItem } from '../enums/todo-filter1-fields-item';

export interface TodoFilter1 {
	readonly offset?: number;
	readonly limit?: number;
	readonly skip?: number;
	readonly order?: (string | Array<string>);
	readonly where?: TodoFilter1Where;
	readonly fields?: (TodoFilter1Fields | Array<TodoFilter1FieldsItem>);
}
