import { Body, Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { ConfigService } from '@nestjs/config';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private configService: ConfigService,
  ) {}

  @Get()
  findAll() {
    console.log(this.configService.get('security'), '我看看');
    return '哈哈哈哈哈';
  }
}
