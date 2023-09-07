export class Submission {
  id: number;
  status: string;
  user_id: number;
  problem_id: string;
  source_code: string;
  time: number;
  memory: number;
  message: string;
  created_at: Date;
  updated_at: Date;

  constructor(data: any) {
    Object.assign(this, data);
  }
}
