export const createUserPath = {
  post: {
    tags: ['Usuário'],
    summary: 'API para criar usuário',
    description: 'Essa rota pode ser executada por **qualquer usuário**',
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/createUserParams'
          }
        }
      }
    },
    responses: {
      201: {
        description: 'Sucesso'
      },
      400: {
        $ref: '#/components/badRequest'
      },
      401: {
        $ref: '#/components/unauthorized'
      },
      404: {
        $ref: '#/components/notFound'
      },
      500: {
        $ref: '#/components/serverError'
      }
    }
  }
};
