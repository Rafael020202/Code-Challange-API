import Problem from "@modules/problem/infra/typeorm/entities/Problem";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('submissions')
export default class Submission {

  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  status: string;

  @Column()
  response: string;

  @Column()
  problem_id: string;

  @Column()
  source_code: string;

  /*@OneToOne(() => Problem)
  @JoinColumn({ name: 'problem_id' })
  problem: Problem;
  */
}