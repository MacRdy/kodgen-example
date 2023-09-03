import { TodoFilter1Where } from './TodoFilter1Where';
import { TodoFilter1Fields } from './TodoFilter1Fields';
import { TodoFilter1FieldsItem } from '../enums/TodoFilter1FieldsItem';

export interface TodoFilter1 {
	readonly offset?: number;
	readonly limit?: number;
	readonly skip?: number;
	readonly order?: (string | Array<string>);
	readonly where?: TodoFilter1Where;
	readonly fields?: (TodoFilter1Fields | Array<TodoFilter1FieldsItem>);
}
