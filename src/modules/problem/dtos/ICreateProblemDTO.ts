export interface ICreateProblemDTO {
  title: string;
  description: string;
  input_description: string;
  output_description: string;
  source_code: string;
  response?: string;
  category_id: number;
  level: number;
  points: number;
  inputs: {
    value: string;
    output: string;
    is_example: boolean;
  }[];
}
