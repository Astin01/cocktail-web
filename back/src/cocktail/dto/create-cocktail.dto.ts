import { PickType } from '@nestjs/swagger';
import { Cocktail } from 'src/entities/cocktail.entity';

export class CreateCocktailDto extends PickType(Cocktail, [
  'id',
  'name',
  'ingredients',
  'description',
  'address',
] as const) {}
