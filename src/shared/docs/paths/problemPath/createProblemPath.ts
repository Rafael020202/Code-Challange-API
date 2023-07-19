export const createProblemPath = {
  post: {
    security: [
      {
        bearer: <any>[]
      }
    ],
    tags: ['Problema'],
    summary: 'API para criar problema',
    description: 'Essa rota pode ser executada por **usuário autenticado**',
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/createProblemParams'
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
