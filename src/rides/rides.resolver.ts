import { Resolver, Query, Mutation, Args, ResolveField, Parent } from '@nestjs/graphql';
import { Ride, RideInput } from '../graphql.schema';
import { PrismaService } from '../prisma/prisma.service';

@Resolver('Ride')
export class RidesResolver {
  constructor(private readonly prisma: PrismaService) {}

  @Query('rides')
  async rides(): Promise<Ride[]> {
    return this.prisma.ride.findMany();
  }

  @Query('ride')
  async ride(@Args('id') id: string): Promise<Ride> {
    return this.prisma.ride.findUnique({ where: { id } });
  }

  @ResolveField()
  async user(@Parent() { userId: id }: Ride) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  @Mutation('rideCreate')
  async create(@Args('input') input: RideInput): Promise<Ride> {
    const dateTime = new Date().toISOString();
    return await this.prisma.ride.create({
      data: {
        ...input,
        createdAt: dateTime,
        updatedAt: dateTime
      }
    });
  }
}
