import ISubmissionDTO from '../dtos/ISubmissionDTO';
import Submission from '../infra/typeorm/entities/Submission';

export default interface ISubmissionRepository {
  create(data: ISubmissionDTO): Promise<Submission>;
  get(id: number): Promise<Submission>;
  index(user_id: number): Promise<Submission[]>;
}
