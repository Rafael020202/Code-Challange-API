import {
  loginParamsSchema,
  loginResultSchema,
  errorSchema,
  createUserParamsSchema,
  createProblemParamsSchema,
  problemSchema,
  problemsSchema,
  createSubmissionParamsSchema,
  submissionSchema
} from './schemas/';

export default {
  loginParams: loginParamsSchema,
  loginResult: loginResultSchema,
  error: errorSchema,
  createUserParams: createUserParamsSchema,
  createProblemParams: createProblemParamsSchema,
  problem: problemSchema,
  problems: problemsSchema,
  createSubmissionParams: createSubmissionParamsSchema,
  submission: submissionSchema
};
