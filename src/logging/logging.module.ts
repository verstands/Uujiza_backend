import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { LoggingService } from './logging.service';
import { LoggingController } from './logging.controller';

@Module({
  providers: [LoggingService, PrismaService],
  controllers: [LoggingController],
})
export class LoggingModule {}
