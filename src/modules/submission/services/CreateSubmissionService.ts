import { inject, injectable } from 'tsyringe';

import Submission from '../infra/typeorm/entities/Submission';
import ISubmissionDTO from '../dtos/ISubmissionDTO';
import IInputRepository from '@modules/problem/repositories/IInputRepository';
import ICompilerProvider from '../providers/CompilerProvider/models/IComplierProvider';
import ISubmissionRepository from '../repositories/ISubmissionRepository';
import { response } from 'express';

interface IStatus {
  status: number;
  message: string;
}

@injectable()
export default class CreateSubmissionService {
  constructor(
    @inject('SubmissionRepository')
    private submissionRepository: ISubmissionRepository,

    @inject('CompilerProvider')
    private complierProvider: ICompilerProvider,

    @inject('InputRepository')
    private inputRepository: IInputRepository
  ){}

  public async execute({source_code, problem_id}: ISubmissionDTO): Promise<IStatus> {

    const inputs = await this.inputRepository.getByProblemId(problem_id);

    let count = 0;

    for(let i = 0; i < inputs.length; i++) {
      const data = inputs[i];

      const { token } = await this.complierProvider.submit({
        source_code, 
        stdin: Buffer.from(data.value).toString('base64')
      });
      
      const response  = await this.complierProvider.getSubmissionStatus(token);
      const output = response.stdout.split('/n')[0];

      if (data.output === output) count++;
      else return;       
    }

    const map: {
      [key: number]: IStatus;
    } = {
      1: {
        message: 'accepted'
      } as IStatus,

      2: {
        message: 'wrong'
      } as IStatus
    };

    const resp = Number(count !== inputs.length);

    await this.submissionRepository.create({ 
      problem_id: problem_id, 
      source_code: source_code,
      status: map[resp].message
    });

    return {} as IStatus; 
  
  }
}