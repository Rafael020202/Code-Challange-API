import InputExample from "../infra/typeorm/entities/InputExample";

export default interface ICreateProblemDTO{
  title: string;
  description: string;
  input: string;
  output: string;

  input_example: InputExample[];
}