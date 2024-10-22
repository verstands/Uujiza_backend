import { Module } from '@nestjs/common';
import { PaysService } from './pays.service';
import { PaysController } from './pays.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [PaysService, PrismaService],
  controllers: [PaysController]
})
export class PaysModule {}
