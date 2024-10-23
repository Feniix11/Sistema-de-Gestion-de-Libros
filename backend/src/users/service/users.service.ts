import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from '../entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users) private usersRepository: Repository<Users>,
  ) {}

  create(createUserDto: CreateUserDto) {
    const userNew = this.usersRepository.save(createUserDto);
    return userNew;
  }

  findAll() {
    return this.usersRepository.find();
  }

  findOne(id: number) {
    return this.usersRepository.findOneBy({ id });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const userUpdate = await this.usersRepository.update(id, updateUserDto);
    return `El usuario con id: ${id} se actualizo con exito`;
  }

  remove(id: number) {
    return this.usersRepository.softDelete({ id });
  }
}
