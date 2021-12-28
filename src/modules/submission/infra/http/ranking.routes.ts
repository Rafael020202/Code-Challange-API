import RankController from '@modules/submission/controllers/RankController';
import { Router } from 'express';

const rankController = new RankController();
const rankRoutes = Router();

rankRoutes.get('/', rankController.index);

export default rankRoutes;