import ICreateOutputExampleDTO from "../dtos/ICreateOutputExampleDTO";

export default interface IOutputExampleRepository {
  create(data: ICreateOutputExampleDTO): Promise<void>
}