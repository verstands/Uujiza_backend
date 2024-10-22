import { Module } from '@nestjs/common';
import { ProduitService } from './produit.service';
import { ProduitController } from './produit.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [ProduitService, PrismaService],
  controllers: [ProduitController]
})
export class ProduitModule {}
