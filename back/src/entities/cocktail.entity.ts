import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cocktail {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  ingredients: string[];

  @Column()
  description: string;

  @Column()
  imageUrl: string;
}
