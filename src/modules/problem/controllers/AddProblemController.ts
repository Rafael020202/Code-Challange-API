import { Controller, HttpResponse } from '@shared/protocols';
import { CreateProblemService } from '@modules/problem/services';

export class AddProblemController implements Controller {
  constructor(private createProblemService: CreateProblemService) {}

  public async handle(
    request: AddProblemController.Request
  ): Promise<HttpResponse> {
    const data = request as any;

    await this.createProblemService.execute(data);

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
    level: number;
    inputs: {
      value: string;
      output: string;
      is_example: boolean;
    }[];
  };
}
