import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UsersModule } from './users/users.module';
import { RidesModule } from './rides/rides.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { typeDefs as scalarTypeDefs, resolvers as scalarResolvers } from 'graphql-scalars';
import { GraphQLError, GraphQLFormattedError } from 'graphql';

@Module({
  imports: [
    UsersModule,
    RidesModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      typeDefs: [...scalarTypeDefs],
      resolvers: [scalarResolvers],
      formatError: ({ message, extensions }: GraphQLError) => {
        const graphQLFormattedError: GraphQLFormattedError = {
          message,
          extensions: {
            ...extensions
          }
        };
        return graphQLFormattedError;
      },
      installSubscriptionHandlers: true
    })
  ]
})
export class AppModule {}
