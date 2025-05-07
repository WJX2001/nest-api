import { Field, ID } from '@nestjs/graphql';

export abstract class BaseModel {
  @Field(() => ID)
  id: string;
  @Field({
    description: 'Identifies the date and time when the object was created.',
  })
  createAt: Date;
  @Field({
    description:
      'Identifies the date and time when the object was last updated.',
  })
  updatedAt: Date;
}
