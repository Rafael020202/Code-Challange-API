import { Router } from 'express';

import { makeListCategoriesController } from '@modules/category/main/factories';
import { adaptRoute } from '@shared/adapters';

const routes = Router();

routes.get('/', adaptRoute(makeListCategoriesController()));

export default routes;
