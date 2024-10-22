import { Module } from '@nestjs/common';
import { VilleService } from './ville.service';
import { PrismaService } from 'src/prisma.service';
import { VilleController } from './ville.controller';

@Module({
  providers: [VilleService, PrismaService],
  controllers: [VilleController]

})
export class VilleModule {}
