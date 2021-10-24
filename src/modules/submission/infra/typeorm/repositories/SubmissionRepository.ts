import ICreateSubmissionDTO from "@modules/submission/dtos/ISubmissionDTO";
import ISubmissionRepository from "@modules/submission/repositories/ISubmissionRepository";
import { getRepository, Repository } from "typeorm";
import Submission from "../entities/Submission";

export default class SubmissionRepository implements ISubmissionRepository {
  private ormRepository: Repository<Submission>
  
  constructor(){
    this.ormRepository = getRepository(Submission);
  }

  public async create(data: ICreateSubmissionDTO): Promise<Submission> {
    const submission = this.ormRepository.create(data);

    return await this.ormRepository.save(submission);
  }
}