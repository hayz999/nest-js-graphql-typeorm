import { Module } from '@nestjs/common';
import { GraphQLModule} from "@nestjs/graphql";
import { PetsModule } from './pets/pets.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { TypeOrmModule } from "@nestjs/typeorm";
import { OwnersModule } from './owners/owners.module';


@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/schema.gql',
      sortSchema: true
    }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: ':memory:',
      entities: ['dist/**/*.entity{.ts,.js}'],
      // in production this should be migrations instead
      synchronize: true,
    }),
    PetsModule,
    OwnersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
