import { ICreateSubmissionDTO } from '@modules/submission/dtos';
import { Submission } from '@modules/submission/entities';

export interface ISubmissionRepository {
  create(data: ICreateSubmissionDTO): Promise<Submission>;
  get(id: number): Promise<Submission>;
  index(user_id: number): Promise<Submission[]>;
}
