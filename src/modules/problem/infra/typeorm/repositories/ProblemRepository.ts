import { EntityRepository, getRepository, Repository } from 'typeorm';
import IProblemDTO from '@modules/problem/dtos/IProblemDTO';
import IProblemRepository from '@modules/problem/repositories/IProblemRepository';
import Problem from '../entities/Problem';

@EntityRepository(Problem)
export default class ProblemRepository implements IProblemRepository{
  private ormRepository: Repository<Problem>
  
  constructor() {
    this.ormRepository = getRepository(Problem);
  }

  public async create(data: IProblemDTO): Promise<Problem> {
    const problem = this.ormRepository.create(data);

    return await this.ormRepository.save(problem);
  }

  public async getAll(user_id: number): Promise<Problem[]> {
    const problems = await this.ormRepository
    .createQueryBuilder('problems')
    .leftJoinAndSelect('problems.submissions','s', 's.user_id = :user_id', { user_id })
    .leftJoinAndSelect('problems.category', 'c')
    .loadRelationCountAndMap(
      'problems.qty_accepted', 
      'problems.submissions', 
      'submission', (qb) => qb.where('submission.status = :status', {status: 'accepted'})
    ).getMany()

    return problems;
  }
  
  public async getByTitle(title: string): Promise<Problem | undefined> {
    const problem = await this.ormRepository.findOne({ where: { title } });
    
    return problem;
  }

  public async getById(id: number): Promise<Problem | undefined> {
    return await this.ormRepository.findOne({ 
      where: {id},
      relations: ['category', 'inputs'] 
    });
  }

  public async getByCategory(category_id: number): Promise<Problem[] | undefined> {
    return await this.ormRepository.find({ where: { category_id } })
  } 
}