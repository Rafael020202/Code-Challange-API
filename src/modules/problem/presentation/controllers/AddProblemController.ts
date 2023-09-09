import { Controller, HttpResponse } from '@shared/protocols';
import { noContent } from '@shared/helpers';
import { AddProblem } from '@modules/problem/domain/usecases';

export class AddProblemController implements Controller {
  constructor(private dbAddProblem: AddProblem) {}

  public async handle(
    request: AddProblemController.Request
  ): Promise<HttpResponse> {
    const { user_id, ...data } = request;

    await this.dbAddProblem.add({ ...data, author: user_id });

    return noContent();
  }
}

export namespace AddProblemController {
  export type Request = {
    title: string;
    description: string;
    input_description: string;
    output_description: string;
    category_id: number;
    user_id: string;
    level: number;
    inputs: {
      value: string;
      output: string;
      is_example: boolean;
    }[];
  };
}
