import ISubmissionDTO from '@modules/submission/dtos/ISubmissionDTO';
import ISubmissionRepository from '@modules/submission/repositories/ISubmissionRepository';
import { getRepository, Repository } from 'typeorm';
import Submission from '../entities/Submission';

export default class SubmissionRepository implements ISubmissionRepository {
  private ormRepository: Repository<Submission>;

  constructor() {
    this.ormRepository = getRepository(Submission);
  }

  public async create(data: ISubmissionDTO): Promise<Submission> {
    const submission = this.ormRepository.create(data);

    return await this.ormRepository.save(submission);
  }

  public async index(user_id: number): Promise<Submission[]> {
    const submissions = await this.ormRepository.find({
      where: { user_id },
      relations: ['problem']
    });

    return submissions;
  }

  public async get(id: number): Promise<Submission> {
    const submission = await this.ormRepository.findOne({ where: { id } });

    return submission;
  }

  public async getByUser(): Promise<Submission[]> {
    const submissions = await this.ormRepository
      .createQueryBuilder('submissions')
      //.leftJoinAndSelect('submissions.user','u', 'u.id = submissions.user_id')
      .select('submissions.user_id', 'user_id')
      .addSelect('count(*)')
      .groupBy('submissions.user_id')
      .getRawMany();

    return submissions;
  }
}
