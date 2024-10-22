import { Module } from '@nestjs/common';
import { PharmacieService } from './pharmacie.service';
import { PharmacieController } from './pharmacie.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [PharmacieService, PrismaService],
  controllers: [PharmacieController]
})
export class PharmacieModule {}
