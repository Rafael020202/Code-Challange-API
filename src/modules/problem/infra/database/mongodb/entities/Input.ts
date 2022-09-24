import Problem from './Problem';

export default class Input {
  id: number;
  value: string;
  output: string;
  isExample: boolean;
  problem_id: number;
  problem: Problem;
  created_at: Date;
  updated_at: Date;
}