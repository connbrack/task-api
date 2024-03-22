import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class TemplateSQL {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  check: boolean;

  @Column()
  item: string;
}
