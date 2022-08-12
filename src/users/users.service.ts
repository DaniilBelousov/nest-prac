import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { NewUser } from 'src/graphql.schema';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findOne(id: string): Promise<User> {
    return this.prisma.user.findUnique({
      where: {
        id
      }
    });
  }

  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany({});
  }

  async create(input: NewUser): Promise<User> {
    return this.prisma.user.create({
      data: input
    });
  }
}
