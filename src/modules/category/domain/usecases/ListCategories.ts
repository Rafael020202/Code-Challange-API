import { Category } from '@modules/category/domain/models';

export interface ListCategories {
  list(data: ListCategories.Params): Promise<ListCategories.Result>;
};

export namespace ListCategories {
  export type Params = {
    filters?: any;
    limit?: number;
    skip?: number;
    sort?: {
      field: string;
      order: 'asc' | 'desc';
    };
  };

  export type Result = Category[];
}