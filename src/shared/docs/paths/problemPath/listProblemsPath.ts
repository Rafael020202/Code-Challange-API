export const listProblemsPath = {
  get: {
    security: [
      {
        bearer: <any>[]
      }
    ],
    tags: ['Problema'],
    summary: 'API para listar problemas cadastrados',
    description: 'Essa rota pode ser executada por **usuário autenticado**',
    responses: {
      200: {
        description: 'Sucesso',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/problems'
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
