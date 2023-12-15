import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ schema: 'cocktailDB', name: 'reviews' })
export class Reviews {
  @PrimaryColumn('varchar', { name: 'id', unique: true, length: 10 })
  id: string;

  @Column('varchar', { name: 'nickname', length: 30 })
  nickname: string;

  @Column('varchar', { name: 'address', length: 300 })
  content: string;

  // @ManyToOne(() => Users, (users) => users.UserReviews, {
  //   onDelete: 'SET NULL',
  //   onUpdate: 'CASCADE',
  // })
  // @ManyToOne(() => Cocktail, (cocktail) => cocktail.id, {
  //   onDelete: 'SET NULL',
  //   onUpdate: 'CASCADE',
  // })
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date | null;
}
