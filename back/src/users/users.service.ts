import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from 'src/entities/Users.entity';
import bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {}

  async createUser(body: CreateUserDto) {
    const id = body.id;
    const password = body.password;
    const nickname = body.nickname;
    const email = body.email;
    const address = body.address;
    const telephone = body.telephone;
    const saltRounds = 10;
    const user = await this.usersRepository.findOne({ where: { id } });

    if (user) {
      throw new Error('이미 존재하는 사용자입니다.');
    }
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashedPassword = await bcrypt.hashSync(password, salt);
    await this.usersRepository.save({
      id,
      email,
      nickname,
      address,
      telephone,
      password: hashedPassword,
    });
  }

  async findOne(id: string) {
    return await this.usersRepository.findOne({ where: { id } });
  }
}
