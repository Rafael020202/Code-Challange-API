import Problem from '@modules/problem/infra/typeorm/entities/Problem';
import { User } from '@modules/users/entities';

export class Submission {
  id: number;
  status: string;
  user_id: number;
  problem_id: number;
  source_code: string;
  time: number;
  memory: number;
  message: string;
  problem: Problem;
  user: User;
  created_at: Date;
  updated_at: Date;

  constructor(data: any) {
    Object.assign(this, data);
  }
}
