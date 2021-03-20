import ICreateInputExampleDTO from "../dtos/ICreateInputExampleDTO";
import InputExample from "../infra/typeorm/entities/InputExample";

export default interface IInputExampleRepository {
  create(data: ICreateInputExampleDTO): Promise<InputExample>;
}