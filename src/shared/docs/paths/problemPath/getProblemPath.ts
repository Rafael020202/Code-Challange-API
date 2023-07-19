export const getProblemPath = {
  get: {
    security: [
      {
        bearer: <any>[]
      }
    ],
    tags: ['Problema'],
    summary: 'API para consultar um problema cadatrado',
    description: 'Essa rota pode ser executada por **usuários autenticados**',
    responses: {
      200: {
        description: 'Sucesso',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/problem'
            }
          }
        }
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
