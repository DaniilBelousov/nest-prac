import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { RidesResolver } from './rides.resolver';

@Module({
  imports: [PrismaModule],
  providers: [RidesResolver]
})
export class RidesModule {}
