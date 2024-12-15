import { Module } from '@nestjs/common';
import { AgentModule } from './agent/agent.module';
import { AuthModule } from './auth/auth.module';
import { PharmacieModule } from './pharmacie/pharmacie.module';
import { ProduitModule } from './produit/produit.module';
import { PaysModule } from './pays/pays.module';
import { VilleModule } from './ville/ville.module';
import { LoggingModule } from './logging/logging.module';
import { CommuneModule } from './commune/commune.module';
import { QuartierModule } from './quartier/quartier.module';
import { CarouselModule } from './carousel/carousel.module';
import { AproposModule } from './apropos/apropos.module';
import { ContactModule } from './contact/contact.module';


@Module({
  imports: [
    AgentModule,
    AuthModule,
    VilleModule,
    PharmacieModule,
    ProduitModule,
    PaysModule,
    LoggingModule,
    CommuneModule,
    QuartierModule,
    CarouselModule,
    AproposModule,
    ContactModule
  ],
})
export class AppModule {}
