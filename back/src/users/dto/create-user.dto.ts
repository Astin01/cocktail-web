import { PickType } from '@nestjs/swagger';
import { Users } from 'src/entities/Users.entity';

export class CreateUserDto extends PickType(Users, [
  'id',
  'password',
  'email',
  'nickname',
  'address',
  'telephone',
] as const) {}
