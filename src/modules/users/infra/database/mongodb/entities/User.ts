export class User {
  id: number;
  name: string;
  email: string;
  password: string;
  created_at: Date;
  updated_at: Date;

  constructor(data: any) {
    Object.assign(this, data);
  }
}
