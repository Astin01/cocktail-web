import { Injectable } from '@nestjs/common';
import { CreateCocktailDto } from './dto/create-cocktail.dto';
import { Cocktail } from 'src/entities/cocktail.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CocktailService {
  constructor(
    @InjectRepository(Cocktail)
    private cocktailRepository: Repository<Cocktail>,
  ) {}

  async create(createCocktailDto: CreateCocktailDto) {
    const id = createCocktailDto.id;
    const name = createCocktailDto.name;
    const ingredients = createCocktailDto.ingredients;
    const description = createCocktailDto.description;
    const address = createCocktailDto.address;

    const cocktail = await this.cocktailRepository.findOne({ where: { id } });

    if (cocktail) {
      throw new Error('이미 존재하는 칵테일입니다.');
    }
    await this.cocktailRepository.save({
      id,
      name,
      ingredients,
      description,
      address,
    });
  }

  async findAll() {
    return await this.cocktailRepository.find();
  }

  async findOne(id: number) {
    return await this.cocktailRepository.findOne({ where: { id } });
  }
}
