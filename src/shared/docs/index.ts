import paths from './paths';
import components from './components';
import schemas from './schemas';

export default {
  openapi: '3.0.0',
  info: {
    title: '4Dev - Desafios para Programadores',
    description:
      'Essa é a documentação da API feita para o projeto CodeChallanger usando Typescript, TDD, Clean Architecture e seguindo os princípios do SOLID e Design Patterns.',
    version: '1.0.0',
    contact: {
      name: 'Rafael Lima Loureiro',
      email: 'luizrafael391@gmail.com',
      url: 'https://www.linkedin.com/in/rmanguinho'
    },
    license: {
      name: 'GPL-3.0-or-later',
      url: 'https://spdx.org/licenses/GPL-3.0-or-later.html'
    }
  },
  servers: [
    {
      url: '/api',
      description: 'Servidor Principal'
    }
  ],
  tags: [
    {
      name: 'Login',
      description: 'APIs relacionadas a Login'
    },
    {
      name: 'Usuário',
      description: 'APIs relacionadas a Usuário'
    },
    {
      name: 'Problema',
      description: 'APIs relacionadas a Problema'
    },
    {
      name: 'Submissão',
      description: 'APIs relacionadas a Submissão'
    }
  ],
  paths,
  schemas,
  components
};
