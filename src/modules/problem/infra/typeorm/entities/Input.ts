import { 
  Column, 
  Entity, 
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn
} from 'typeorm';
import Problem from './Problem';


@Entity('inputs')
export default class Input {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  value: string;
  
  @Column()
  output: string;

  @Column()
  isExample: boolean;

  @Column()
  problem_id: string;

  @ManyToOne(() => Problem)
  @JoinColumn({name: 'problem_id'})
  problem: Problem;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}