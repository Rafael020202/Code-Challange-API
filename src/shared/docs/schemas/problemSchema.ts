export const problemSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'string'
    },
    title: {
      type: 'string'
    },
    description: {
      type: 'string'
    },
    input_description: {
      type: 'string'
    },
    output_description: {
      type: 'string'
    },
    category_id: {
      type: 'number'
    },
    level: {
      type: 'number'
    },
    input: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          value: {
            type: 'string'
          },
          output: {
            type: 'string'
          }
        }
      }
    }
  }
};
