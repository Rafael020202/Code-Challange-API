import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('categories')
export default class Category {
  
  @PrimaryGeneratedColumn('increment', { type: 'integer' })
  id: number;

  @Column()
  description: string;
}