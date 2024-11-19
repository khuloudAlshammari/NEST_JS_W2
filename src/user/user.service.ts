import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from "./user.repository";

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {} // Inject the custom repository
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }
  // TypeORM Repository API Documentation
  // https://orkhan.gitbook.io/typeorm/docs/repository-api

  findAll() {
    this.userRepository.find();
  }

  findOne(id: number) {
    this.userRepository.findOne({
      where: {
        id
      }
    });
  }

  insert(users: CreateUserDto[]) {
    this.userRepository.insert(users);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    this.userRepository.update({
      id,
    }, updateUserDto);

  }

  remove(id: number) {
    // If I only have ID
    this.userRepository.delete(id);

    // If I have the user object
    // const user1 = this.userRepository.findOne({where: {id}});
    // this.userRepository.remove(user1);
  }
}
