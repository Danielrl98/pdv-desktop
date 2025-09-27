import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

export type ICompany = {
  id?: number;
  uuid?: string;
  imagem?: string;
  documento: string;
  razao_social: string;
  nome_fantasia?: string;
  plano: string;
  endereco?: string;
  numero_endereco?: string;
  bairro?: string;
  cidade?: string;
  complemento?: string;
  uf?: string;
  telefone?: string;
  celular?: string;
  email?: string;
  status?: string;
  createdAt?: Date;
  updatedAt?: Date;
};

@Entity('empresa')
export class Company implements ICompany {
  constructor() {
    // Construtor necessário para TypeORM no Electron CommonJS
  }

  @PrimaryGeneratedColumn()
  id?: number;

  @Column('varchar', { nullable: true })
  uuid?: string;

  @Column('varchar')
  razao_social!: string;

  @Column('varchar', { nullable: true })
  nome_fantasia?: string;

  @Column('varchar')
  documento!: string;

  @Column('varchar', { default: null })
  imagem?: string;

  @Column('varchar')
  plano!: string;

  @Column('varchar', { nullable: true })
  endereco?: string;

  @Column('varchar', { nullable: true })
  numero_endereco?: string;

  @Column('varchar', { nullable: true })
  bairro?: string;

  @Column('varchar', { nullable: true })
  cidade?: string;

  @Column('varchar', { nullable: true })
  complemento?: string;

  @Column('varchar', { nullable: true })
  uf?: string;

  @Column('varchar', { nullable: true })
  telefone?: string;

  @Column('varchar', { nullable: true })
  celular?: string;

  @Column('varchar', { nullable: true })
  email?: string;

  @Column('varchar', { nullable: true })
  status?: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
