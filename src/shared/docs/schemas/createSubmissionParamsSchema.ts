export const createSubmissionParamsSchema = {
  type: 'object',
  properties: {
    source_code: {
      type: 'string'
    },
    problem_id: {
      type: 'string'
    }
  },
  required: ['source_code', 'problem_id']
};
