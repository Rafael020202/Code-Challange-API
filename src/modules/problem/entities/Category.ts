export class Category {
  category_id: number;
  description: string;

  constructor(data: any) {
    Object.assign(this, data);
  }
}
