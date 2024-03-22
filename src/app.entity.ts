import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Tasks {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  completed: boolean;

  @Column()
  task: string;

  @Column()
  priority: number;
}
