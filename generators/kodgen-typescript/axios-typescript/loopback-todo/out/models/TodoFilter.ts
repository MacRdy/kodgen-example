import { TodoFilterFields } from './TodoFilterFields';
import { TodoFilterFieldsItem } from '../enums/TodoFilterFieldsItem';

export interface TodoFilter {
	readonly offset?: number;
	readonly limit?: number;
	readonly skip?: number;
	readonly order?: (string | Array<string>);
	readonly fields?: (TodoFilterFields | Array<TodoFilterFieldsItem>);
}
