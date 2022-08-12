import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User, NewUser } from 'src/graphql.schema';

@Resolver('User')
export class UsersResolver {
  constructor(private readonly userService: UsersService) {}

  @Query('users')
  async users(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Query('user')
  async user(@Args('id') args: string): Promise<User> {
    return this.userService.findOne(args);
  }

  @Mutation('userCreate')
  async create(@Args('input') args: NewUser): Promise<User> {
    return await this.userService.create(args);
  }
}
