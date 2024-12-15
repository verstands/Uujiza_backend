import { Module } from '@nestjs/common';
import { AproposService } from './apropos.service';
import { AproposController } from './apropos.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [AproposService, PrismaService],
  controllers: [AproposController]
})
export class AproposModule {}
