import 'reflect-metadata';
import {
  ObjectType,
  registerEnumType,
  HideField,
  Field,
} from '@nestjs/graphql';
import { IsEmail } from 'class-validator';
import { BaseModel } from '../../common/models/base.model';
import { Role } from '@prisma/client';
import { Post } from 'src/posts/models/post.model';

registerEnumType(Role, {
  name: 'Role',
  description: 'User role',
});

@ObjectType()
export class User extends BaseModel {
  @Field()
  @IsEmail()
  email: string;

  @Field(() => String, { nullable: true })
  firstname?: string;

  @Field(() => String, { nullable: true })
  lastname?: string;

  @Field(() => Role)
  role: Role;

  @Field(() => [Post], { nullable: true })
  posts?: [Post] | null;

  @HideField()
  password: string;
}
