import { LoadSubmissionById } from '@modules/submission/domain/usecases';
import { LoadSubmissionByIdRepository } from '@modules/submission/data/protocols';

export class DbLoadSubmissionById implements LoadSubmissionById {
  constructor(private loadSubmissionIdRepository: LoadSubmissionByIdRepository) { }

  public async loadById(id: string): Promise<LoadSubmissionById.Result> {
    return this.loadSubmissionIdRepository.loadById(id);
  }
} 
