import {Resolver, Query, Mutation, Args, Int, Parent, ResolveField} from '@nestjs/graphql';
import {PetsService} from "./pets.service";
import {Pet} from "./pet.entity";
import {CreatePetInput} from "./dto/create-pet.input";
import {Owner} from "../owners/entities/owner.entity";

@Resolver(() => Pet)
export class PetsResolver {
  constructor(private petsService: PetsService) {}

  @Query(() => [Pet])
  async pets(): Promise<Pet[]> {
    return this.petsService.findAll()
  }

  @Query(() => Pet)
  getPet(@Args('id', {type: () => Int}) id: number): Promise<Pet> {
    return this.petsService.findOne(id)
  }

  @ResolveField(() => Owner)
  getOwner(@Parent() pet: Pet): Promise<Owner> {
    return this.petsService.getOwner(pet.ownerId)
  }

  @Mutation(() => Pet)
  createPet(@Args('createPetInput') createPetInput: CreatePetInput): Promise<Pet> {
    return this.petsService.createPet(createPetInput)
  }
}
