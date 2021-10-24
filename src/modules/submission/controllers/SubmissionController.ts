
import { container } from "tsyringe";
import { Request, Response } from 'express';
import CreateSubmissionService from "../services/CreateSubmissionService";

export default class SubmissionController {
  public async create(request: Request, response: Response) {
    const createSubmission = container.resolve(CreateSubmissionService);
    const submission = await createSubmission.execute(request.body);

    return response.json(submission);  
  }
}