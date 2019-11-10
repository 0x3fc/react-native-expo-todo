import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ITask } from "../components/Todo/Todo";

@Entity("task")
export class Task extends BaseEntity implements ITask {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("varchar")
  name: string;

  @Column("boolean")
  completed: boolean;
}
