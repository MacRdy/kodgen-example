import { TodoFilterFields } from './todo-filter-fields';
import { TodoFilterFieldsItem } from '../enums/todo-filter-fields-item';

export interface TodoFilter {
	readonly offset?: number;
	readonly limit?: number;
	readonly skip?: number;
	readonly order?: (string | Array<string>);
	readonly fields?: (TodoFilterFields | Array<TodoFilterFieldsItem>);
}
