import { Module } from '@nestjs/common';
import { CommuneService } from './commune.service';
import { CommuneController } from './commune.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [CommuneService, PrismaService],
  controllers: [CommuneController]
})
export class CommuneModule {}
