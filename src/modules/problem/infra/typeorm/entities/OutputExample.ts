import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import InputExample from "./InputExample";

@Entity('output_examples')
export default class OutputExample {
  
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  value: string;

  @Column()
  input_example_id: string;
  
  @OneToOne(() => InputExample)
  @JoinColumn({ name: 'input_example_id' })
  input_example: InputExample;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;


}