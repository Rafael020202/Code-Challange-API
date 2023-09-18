export interface QueryList {
  filters?: any;
  limit?: number;
  skip?: number;
  sort?: {
    field: string;
    order: 'asc' | 'desc';
  };
};