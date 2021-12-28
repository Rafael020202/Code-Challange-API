
import { container } from "tsyringe";
import { Request, Response } from 'express';
import CreateSubmissionService from "../services/CreateSubmissionService";
import SubmissionRepository from "../infra/typeorm/repositories/SubmissionRepository";

export default class SubmissionController {
  public async create(request: Request, response: Response) {
    const createSubmission = container.resolve(CreateSubmissionService);
    const submission = await createSubmission.execute(request.body);

    return response.json(submission);  
  }

  public async index(request: Request, response: Response) {
    const { user_id } = request.body;
    const submissionRepository = new SubmissionRepository();
    const submissions = await submissionRepository.index(user_id);

    return response.json(submissions);
  }

  public async get(request: Request, response: Response) {
    const { id } = request.params;
    const submissionRepository = new SubmissionRepository();
    const submission = await submissionRepository.get(id);

    return response.json(submission);
  }
}