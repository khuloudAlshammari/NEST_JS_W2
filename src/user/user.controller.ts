import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { faker } from '@faker-js/faker';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}



  @Post('/alluser')
  async fillCustomers() {
    // const customersRepo: Repository<User> = this.userService.getRepositroy();
    console.log("Filling the data");

    // Choose a suitable chunk size
    const chunkSize = 1000;
    const totalUsers = 10_000;
    const users = [];

    for (let i = 0; i < totalUsers; i++) {
      const randomName = faker.internet.username();
      const randomUsername = faker.internet.username();
      const randomEmail = faker.internet.email();
     
      users.push({
        name: randomName,
        email: randomEmail,
        userName: randomUsername,
        gender: Math.random() > 0.5 ? 1 : 0,
      });


      // Insert in chunks
      if (users.length === chunkSize) {
        console.log('Inserting chunk Number:', i / chunkSize);
        console.log('Percentage done:', (i / totalUsers) * 10 + '%');
        // await customersRepo.insert(users);
        await this.userService.insert(users);
        users.length = 0; // clear the array
      }
    }

    // Insert any remaining users
    if (users.length > 0) {
      // await customersRepo.insert(users);
      await this.userService.insert(users);
    }

    return 'done';
  }

  // @Post()
  // create(@Body() createUserDto: CreateUserDto) {
  //   return this.userService.create(createUserDto);
  // }

  // @Get()
  // findAll() {
  //   return this.userService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.userService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.userService.update(+id, updateUserDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.userService.remove(+id);
  // }
}
