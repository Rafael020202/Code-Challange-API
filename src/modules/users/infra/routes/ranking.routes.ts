import RankingController from '@modules/users/controllers/RankingController';
import { Router } from 'express';

const rankingRoutes = Router();
const rankingController = new RankingController();

rankingRoutes.get('/', rankingController.index);

export default rankingRoutes;
