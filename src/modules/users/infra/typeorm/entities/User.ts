import Submission from '@modules/submission/infra/typeorm/entities/Submission';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';

@Entity('users')
export default class User {
  @PrimaryGeneratedColumn('increment', { type: 'numeric' })
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => Submission, (submission) => submission.user)
  submissions: Submission[];
}
