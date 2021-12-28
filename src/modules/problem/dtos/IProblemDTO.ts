import IInputDTO from "./IInputDTO";

export default interface IProblemDTO {
  title: string;
  description: string;
  input_description: string;
  output_description: string;
  source_code: string;
  response?: string;
  category_id: number;
  level: number;
  points: number;
  inputs: IInputDTO[];
}