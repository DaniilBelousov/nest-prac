import { Resolver, Query, Mutation, Args, ResolveField, Parent } from '@nestjs/graphql';
import { PrismaService } from '../prisma/prisma.service';
import { User, Ride } from '../graphql.schema';
import { UserCreateValidation, UserUpdateValidation } from './validation';

@Resolver('User')
export class UsersResolver {
  constructor(private readonly prisma: PrismaService) {}

  @Query('users')
  async users(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  @Query('user')
  async user(@Args('id') id: string): Promise<User> {
    return this.prisma.user.findUnique({ where: { id } });
  }

  @ResolveField()
  async rides(@Parent() { id }: User): Promise<Ride[]> {
    return this.prisma.ride.findMany({ where: { userId: id } });
  }

  @Mutation('userCreate')
  async create(@Args('input') input: UserCreateValidation): Promise<User> {
    const dateTime = new Date().toISOString();
    return await this.prisma.user.create({
      data: {
        ...input,
        createdAt: dateTime,
        updatedAt: dateTime
      }
    });
  }

  @Mutation('userUpdate')
  async update(@Args('input') input: UserUpdateValidation): Promise<User> {
    return await this.prisma.user.update({
      where: {
        id: input.id
      },
      data: {
        ...input,
        updatedAt: new Date().toISOString()
      }
    });
  }

  @Mutation('userDelete')
  async delete(@Args('id') id: string): Promise<User> {
    return await this.prisma.user.delete({ where: { id } });
  }
}
