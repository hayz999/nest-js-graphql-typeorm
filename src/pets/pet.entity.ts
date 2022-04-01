import {Field, Int, ObjectType} from "@nestjs/graphql";
import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Owner} from "../owners/entities/owner.entity";

@Entity()
@ObjectType()
export class Pet {
  // this is for db table schema
  @PrimaryGeneratedColumn()
  // this is for graphql table schema
  @Field(type => Int)
  id: number

  @Column()
  @Field()
  name: string

  @Column({nullable: true})
  @Field({nullable: true})
  type?: string

  @Column()
  @Field(type => Int)
  ownerId: number

  @ManyToOne(() => Owner, owner => owner.pets)
  @Field(type => Owner)
  owner: Owner
}
