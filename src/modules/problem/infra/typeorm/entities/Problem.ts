import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, TableInheritance, OneToMany, JoinColumn, JoinTable, OneToOne } from 'typeorm';
import InputExample from './InputExample';
import OutputExample from './OutputExample';

@Entity('problems')
export default class Problem { 
 
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  source_code: string;

  @Column()
  input_description: string;

  @Column()
  output_description: string;

  @Column()
  response: string;

  @OneToMany(() => InputExample, input_example => input_example.problem)
  input_example: InputExample[]

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

}