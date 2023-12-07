import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ schema: 'cocktailDB', name: 'users' })
export class Users {
  @PrimaryColumn('varchar', { name: 'id', unique: true, length: 10 })
  id: string;

  @Column('varchar', { name: 'password', length: 100, select: false })
  password: string;

  @Column('varchar', { name: 'email', unique: true, length: 30 })
  email: string;

  @Column('varchar', { name: 'nickname', length: 30 })
  nickname: string;

  @Column('varchar', { name: 'address', length: 30 })
  address: string;

  @Column('varchar', { name: 'telephone', length: 30 })
  telephone: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date | null;
}
