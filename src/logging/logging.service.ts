import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class LoggingService {
  constructor(private readonly prismaService: PrismaService) {}

  
}
