export type Problem = {
  problem_id: number;
  title: string;
  description: string;
  input_description: string;
  output_description: string;
  response: string;
  source_code: string;
  category_id: number;
  author: string;
  level: number;
  points: number;
  qty_accepted: number;
  inputs: {
    value: string;
    output: string;
    is_example: boolean;
  }[];
  created_at: Date;
  updated_at: Date;
};
