import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cocktail {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { name: 'name', length: 15 })
  name: string;

  @Column('varchar', { name: 'ingredient', length: 50 })
  ingredients: string[];

  @Column('varchar', { name: 'description', length: 300 })
  description: string;

  @Column('varchar', { name: 'address', length: 100 })
  address: string;
}
