import { Module } from '@nestjs/common';
import { QuartierService } from './quartier.service';
import { QuartierController } from './quartier.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [QuartierService, PrismaService],
  controllers: [QuartierController]
})
export class QuartierModule {}
