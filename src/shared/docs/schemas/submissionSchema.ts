export const submissionSchema = {
  type: 'object',
  properties: {
    submission_id: {
      type: 'string'
    },
    problem_id: {
      type: 'string'
    },
    memory: {
      type: 'number'
    },
    time: {
      type: 'number'
    },
    message: {
      type: 'string'
    },
    status: {
      type: 'string'
    }
  }
};
