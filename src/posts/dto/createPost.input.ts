import { Field, InputType } from "@nestjs/graphql";
import { IsEmpty, IsNotEmpty } from "class-validator";

@InputType()
export class CreatePostInput {
  @Field()
  @IsEmpty()
  content: string 

  @Field()
  @IsNotEmpty()
  title: string
}