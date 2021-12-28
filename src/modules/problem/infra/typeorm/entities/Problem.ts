import { 
  Entity,
  Column, 
  PrimaryGeneratedColumn, 
  CreateDateColumn, 
  UpdateDateColumn, 
  OneToMany, 
  JoinTable,
  JoinColumn, 
  ManyToOne 
} from 'typeorm';
import Category from './Category';
import Input from './Input';
import Submission from '@modules/submission/infra/typeorm/entities/Submission';


@Entity('problems')
export default class Problem { 
  
  @PrimaryGeneratedColumn('increment', { type: 'numeric' })
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  input_description: string;

  @Column()
  output_description: string;

  @Column({ nullable: true })
  response: string;

  @Column()
  source_code: string;

  @Column({ type: 'numeric'})
  category_id: number;

  @Column()
  level: number;

  @Column({ type: 'float4'})
  points: number;

  qty_accepted: number;

  @ManyToOne(() => Category)
  @JoinColumn({ name: 'category_id' })
  category: Category

  @OneToMany(() => Submission, submission => submission.problem)
  submissions: Submission[]

  @OneToMany(() => Input, input => input.problem)
  inputs: Input[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

}