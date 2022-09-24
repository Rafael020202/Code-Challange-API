import Category from './Category';
import Input from './Input';
import Submission from '@modules/submission/infra/database/mongodb/entities/Submission';


export default class Problem { 
  id: number;
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
  category: Category
  submissions: Submission[]
  inputs: Input[];
  created_at: Date;
  updated_at: Date;
}