import {Field, InputType, Int} from "@nestjs/graphql";
import {IsAlpha} from "class-validator";

@InputType()
export class CreatePetInput {
  // validation that name must be a string of letters
  @IsAlpha()
  @Field()
  name: string

  @Field({nullable: true})
  type?: string

  @Field(type => Int)
  ownerId: number
}
