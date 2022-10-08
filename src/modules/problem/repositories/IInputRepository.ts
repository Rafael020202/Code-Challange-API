import IInputDTO from '../dtos/IInputDTO';
import Input from '../infra/typeorm/entities/Input';

export default interface IInputRepository {
  create(data: IInputDTO): Promise<Input>;
  getExamples(problem_id: number): Promise<Input[]>;
  getByProblemId(problem_id: number): Promise<Input[]>;
}
