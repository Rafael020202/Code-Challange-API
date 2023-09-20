import { Router } from 'express';

import { makeLoadCategoriesController } from '@modules/category/main/factories';
import { adaptRoute } from '@shared/adapters';

const routes = Router();

routes.get('/', adaptRoute(makeLoadCategoriesController()));

export default routes;
