import Submission from '@modules/submission/infra/database/mongodb/entities/Submission';

export default class User {
  id: number;
  name: string;
  email: string;
  password: string;
  created_at: Date;
  updated_at: Date;
  submissions: Submission[];

  constructor(data: any) {
    Object.assign(this, data);
  }
}
