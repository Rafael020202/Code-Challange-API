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

    return (await this.ormRepository.save(problem));
  }

  public async getAll(): Promise<Problem[]> {
    const problems = await this.ormRepository.find({
      relations: ['category']
    });

    return problems;
  }
  
  public async getByTitle(title: string): Promise<Problem | undefined> {
    const problem = await this.ormRepository.findOne({ where: { title } });
    
    return problem;
  }

  public async getById(id: string): Promise<Problem | undefined> {
    return await this.ormRepository.findOne({ 
      where: {id},
      relations: ['category'] 
    });
  }

  public async getByCategory(category_id: string): Promise<Problem[] | undefined> {
    return await this.ormRepository.find({ where: { category_id } })
  } 
}