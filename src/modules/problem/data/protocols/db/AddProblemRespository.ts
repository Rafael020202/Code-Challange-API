import { AddProblem } from '@modules/problem/domain/usecases';
import { Problem } from '@modules/problem/domain/models';

export interface AddProblemRepository {
  add(data: AddProblemRepository.Params): Promise<AddProblemRepository.Result>;
}

export namespace AddProblemRepository {
  export type Params = AddProblem.Params;
  export type Result = Problem;
}
