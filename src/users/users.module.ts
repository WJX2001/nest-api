import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PasswordService } from 'src/auth/password.service';

@Module({
  // imports: [PrismaModule],
  providers: [UsersService, PasswordService],
  controllers: [UsersController],
})
export class UsersModule {}
