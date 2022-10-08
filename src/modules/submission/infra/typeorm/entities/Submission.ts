import Problem from '@modules/problem/infra/typeorm/entities/Problem';
import User from '@modules/users/infra/typeorm/entities/User';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm';

@Entity('submissions')
export default class Submission {
  @PrimaryGeneratedColumn('increment', { type: 'numeric' })
  id: number;

  @Column()
  status: string;

  @Column({ type: 'numeric' })
  user_id: number;

  @Column({ type: 'numeric' })
  problem_id: number;

  @Column()
  source_code: string;

  @Column({ type: 'numeric' })
  time: number;

  @Column({ type: 'numeric' })
  memory: number;

  @Column()
  message: string;

  @ManyToOne(() => Problem, (problem) => problem.submissions)
  @JoinColumn({ name: 'problem_id' })
  problem: Problem;

  @ManyToOne(() => User, (user) => user.submissions)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
