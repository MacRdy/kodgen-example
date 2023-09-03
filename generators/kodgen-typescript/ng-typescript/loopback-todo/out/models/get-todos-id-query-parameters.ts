import { TodoFilter } from './todo-filter';

export interface GetTodosIdQueryParameters {
	readonly filter?: TodoFilter;
}
