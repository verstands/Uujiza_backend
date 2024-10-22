import { Module } from '@nestjs/common';
import { CarouselService } from './carousel.service';
import { CarouselController } from './carousel.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [CarouselService, PrismaService],
  controllers: [CarouselController]
})
export class CarouselModule {}
