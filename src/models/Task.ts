import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export interface ITask {
  id: string;
  name: string;
  completed: boolean;
  createdAt: number;
}

@Entity("task")
export class Task extends BaseEntity implements ITask {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("varchar")
  name: string;

  @Column("boolean")
  completed = false;

  @Column("int")
  createdAt = Date.now();
}
