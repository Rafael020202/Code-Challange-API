import IInputDTO from "./IInputDTO";

export default interface IProblemDTO{
  title: string;
  description: string;
  input_description: string;
  output_description: string;
  inputs: IInputDTO[];
}