import { Response, Request } from 'express'; 
import RankingRepository from '../infra/typeorm/repositories/RankingRepository';

export default class RankingControler {
  
  public async index(request: Request, response: Response) {
    const rankingRepository = new RankingRepository();
    const ranking = await rankingRepository.getAll();

    return response.json(ranking);
  }

}