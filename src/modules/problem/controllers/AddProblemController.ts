import { Controller, HttpResponse } from '@shared/protocols';
import { AddProblem } from '@modules/problem/domain/usecases';

export class AddProblemController implements Controller {
  constructor(private dbAddProblem: AddProblem) {}

  public async handle(
    request: AddProblemController.Request
  ): Promise<HttpResponse> {
    const data = request as any;
    const isValid = await this.dbAddProblem.add(data);

    if (!isValid) {
      return {
        body: {},
        status: 400
      };
    }

    return {
      body: {},
      status: 204
    };
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
