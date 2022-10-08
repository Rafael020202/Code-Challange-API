import Submission from '@modules/submission/infra/database/mongodb/entities/Submission';
import Category from './Category';

export default class Problem {
  problem_id: number;
  title: string;
  description: string;
  input_description: string;
  output_description: string;
  response: string;
  source_code: string;
  category_id: number;
  level: number;
  points: number;
  qty_accepted: number;
  category: Category;
  submissions: Submission[];
  inputs: {
    value: string;
    output: string;
    is_example: boolean;
  }[];
  created_at: Date;
  updated_at: Date;

  constructor(data: any) {
    Object.assign(this, data);
  }
}
