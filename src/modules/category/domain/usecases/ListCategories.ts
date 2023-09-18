import { Category } from '@modules/category/domain/models';
import { QueryList } from '@shared/protocols';

export interface ListCategories {
  list(data: ListCategories.Params): Promise<ListCategories.Result>;
};

export namespace ListCategories {
  export type Params = QueryList;

  export type Result = Category[];
}