export type Problem = {
  problem_id: number;
  title: string;
  description: string;
  memory_limit: number;
  timeout: number;
  input_description: string;
  output_description: string;
  source_code: string;
  category_id: number;
  author: string;
  level: number;
  inputs: {
    value: string;
    output: string;
    is_example: boolean;
  }[];
  created_at: Date;
  updated_at: Date;
};
