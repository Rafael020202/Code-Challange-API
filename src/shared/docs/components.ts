import { bearerAuthSchema } from './schemas/';
import {
  badRequest,
  serverError,
  unauthorized,
  notFound,
  forbidden
} from './components/';

export default {
  securitySchemes: {
    bearer: bearerAuthSchema
  },
  badRequest,
  serverError,
  unauthorized,
  notFound,
  forbidden
};
