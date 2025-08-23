import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export type IUser = {
  id?: number;
  uuid?: string;
  empresa_uuid: string;
  nome?: string;
  senha: string;
  ativo: boolean;
  telefone?: string;
  email: string;
  codigo_recuperacao?: string;
  imagem?: string;
  status?: string;
  permissao?: string;
  createdAt?: Date;
  updatedAt?: Date;
};

@Entity('users')
export class User implements IUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  uuid: string;

  @Column('varchar')
  empresa_uuid: string;

  @Column('varchar', { nullable: true })
  nome: string;

  @Column('varchar')
  senha: string;

  @Column('varchar', { nullable: true })
  telefone: string;

  @Column('boolean', { default: true })
  ativo: boolean;

  @Column('varchar', { unique: true })
  email: string;

  @Column('varchar', { nullable: true })
  codigo_recuperacao: string;

  @Column('varchar', { nullable: true })
  imagem: string;

  @Column('varchar', { nullable: true })
  status: string;

  @Column('varchar')
  permissao: string;

  @Column('date')
  createdAt: Date;

  @Column('date')
  updatedAt: Date;
}
