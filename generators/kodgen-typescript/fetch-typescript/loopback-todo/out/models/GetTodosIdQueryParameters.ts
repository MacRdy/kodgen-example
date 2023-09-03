import { TodoFilter } from './TodoFilter';

export interface GetTodosIdQueryParameters {
	readonly filter?: TodoFilter;
}
