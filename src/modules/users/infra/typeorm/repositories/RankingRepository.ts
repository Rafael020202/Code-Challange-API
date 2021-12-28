import { getRepository, Repository } from "typeorm";
import IRankingRepository from "@modules/users/repositories/IRankingRepository";
import User from "../entities/User";


export default class UserRepository implements IRankingRepository {
  private ormRepository: Repository<User>

  constructor(){
    this.ormRepository = getRepository(User);
  }

  public async getAll(): Promise<any> {
      const ranking = await this.ormRepository.query(`
        select u.id as id, u.name, sum(p.points) as points, avg(time) as average_time, avg(memory) as average_memory, row_number() over(order by u.id) as position 
        from users u
        inner join submissions s 
        on s.user_id = u.id  
        inner join problems p 
        on p.id = s.problem_id 
        group by u.id, s.status
        having s.status = 'accepted'
        order by points desc, average_time, average_memory
      `);

      return ranking;
  }

 

}