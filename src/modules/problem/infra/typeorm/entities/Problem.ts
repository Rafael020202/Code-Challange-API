import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, TableInheritance, OneToMany, JoinColumn, JoinTable, OneToOne, ManyToOne } from 'typeorm';
import Category from './Category';
import Input from './Input';

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

  @Column()
  category_id: string;

  @ManyToOne(() => Category)
  @JoinColumn({ name: 'category_id' })
  category: Category

  /*@OneToMany(() => Input, input => input.problem_id)
  @JoinTable({ name: 'inputs' })
  inputs: Input[];
*/
  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

}