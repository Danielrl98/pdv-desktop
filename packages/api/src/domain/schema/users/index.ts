import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export type IUser = {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
};

@Entity('users')
export class User implements IUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  firstName: string;

  @Column('varchar')
  lastName: string;

  @Column('int')
  age: number;
}
