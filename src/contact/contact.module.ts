import { Module } from '@nestjs/common';
import { ContactService } from './contact.service';
import { ContactController } from './contact.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [ContactService, PrismaService],
  controllers: [ContactController]
})
export class ContactModule {}
