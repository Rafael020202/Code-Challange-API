export const loginResultSchema = {
  type: 'object',
  properties: {
    user: {
      type: 'object',
      properties: {
        user_id: {
          type: 'string'
        },
        name: {
          type: 'string'
        },
        email: {
          type: 'string'
        }
      }
    },
    token: {
      type: 'string'
    }
  }
};
