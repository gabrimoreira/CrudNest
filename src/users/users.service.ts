import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { CreateUserDto} from './dto/create-user.dto';
import {UpdateUserDto} from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private users: User[] = []; // Simulação de um banco de dados

  create(createUserDto: CreateUserDto): User {
    const user: User = { id: Date.now(), ...createUserDto };
    this.users.push(user);
    return user;
  }

  findAll(): User[] {
    return this.users;
  }

  findOne(id: number): User {
    return this.users.find(user => user.id === id);
  }

  update(id: number, updateUserDto: UpdateUserDto): User {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex > -1) {
      this.users[userIndex] = { ...this.users[userIndex], ...updateUserDto };
      return this.users[userIndex];
    }
    return null;
  }

  remove(id: number): void {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex > -1) {
      this.users.splice(userIndex, 1);
    }
  }
}