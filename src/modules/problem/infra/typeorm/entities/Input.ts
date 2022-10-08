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
  @PrimaryGeneratedColumn('increment', { type: 'numeric' })
  id: number;

  @Column()
  value: string;

  @Column()
  output: string;

  @Column({ name: 'isexample' })
  isExample: boolean;

  @Column({ type: 'numeric' })
  problem_id: number;

  @ManyToOne(() => Problem, (problem) => problem.inputs)
  @JoinColumn({ name: 'problem_id' })
  problem: Problem;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
