
import { Request, Response } from 'express';
import SubmissionRepository from "../infra/typeorm/repositories/SubmissionRepository";

export default class SubmissionController {

  public async index(request: Request, response: Response) {
    const submissionRepository = new SubmissionRepository();
    const submissions = await submissionRepository.getByUser();

    return response.json(submissions);
  }


}