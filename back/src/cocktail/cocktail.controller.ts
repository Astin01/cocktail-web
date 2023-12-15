import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CocktailService } from './cocktail.service';
import { CreateCocktailDto } from './dto/create-cocktail.dto';

@Controller('api/cocktail')
export class CocktailController {
  constructor(private readonly cocktailService: CocktailService) {}

  @Post()
  async create(@Body() createCocktailDto: CreateCocktailDto) {
    await this.cocktailService.create(createCocktailDto);
  }

  @Get('all')
  async findAll() {
    return await this.cocktailService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.cocktailService.findOne(+id);
  }
}
