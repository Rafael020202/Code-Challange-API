import { AddProblem } from '@modules/problem/domain/usecases';

export interface AddProblemRepository {
  add(data: AddProblemRepository.Params): Promise<AddProblemRepository.Result>;
}

export namespace AddProblemRepository {
  export type Params = AddProblem.Params;
  export type Result = boolean;
}
