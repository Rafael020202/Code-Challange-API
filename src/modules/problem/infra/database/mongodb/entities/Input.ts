import Problem from './Problem';

export default class Input {
  input_id: number;
  value: string;
  output: string;
  is_example: boolean;
  problem_id: number;
  problem: Problem;
  created_at: Date;
  updated_at: Date;

  constructor(data: any) {
    Object.assign(this, data);
  }
}
