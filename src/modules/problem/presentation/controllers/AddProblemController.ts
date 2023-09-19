import { Controller, HttpResponse, Validation } from '@shared/protocols';
import { ok, badRequest } from '@shared/helpers';
import { AddProblem } from '@modules/problem/domain/usecases';

export class AddProblemController implements Controller {
  constructor(private dbAddProblem: AddProblem, private validation: Validation) { }

  public async handle(
    request: AddProblemController.Request
  ): Promise<HttpResponse> {
    const error = this.validation.validate(request);

    if (error) {
      return badRequest(error);
    }

    const { account_id, ...data } = request;
    const createdProblem = await this.dbAddProblem.add({ ...data, author: account_id });

    return ok(createdProblem);
  }
}

export namespace AddProblemController {
  export type Request = {
    title: string;
    description: string;
    input_description: string;
    output_description: string;
    memory_limit: number;
    timeout: number;
    category_id: number;
    account_id: string;
    level: number;
    inputs: {
      value: string;
      output: string;
      is_example: boolean;
    }[];
  };
}
