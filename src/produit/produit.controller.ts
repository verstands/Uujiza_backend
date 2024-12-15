import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ProduitService } from './produit.service';
import { ProduitDto } from 'src/dto/produit.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('produit')
export class ProduitController {
  constructor(private readonly allservice: ProduitService) { }


  @Get()
  get() {
    return this.allservice.getAll();
  }

  @Get(':id')
  getFindOne(@Param('id') id: string) {
    return this.allservice.getFind({
      id,
    });
  }

  @Get('produitcommune/:id')
  getFindMedicamentQuartier(@Param('id') id: string) {
    console.log("iiiiid", id)
    return this.allservice.getFindMedicamentQuartier({
      id,
    });
  }

  @Get('produitrecherche/:ville')
  getSearcheMedicament(@Param('ville') ville: string) {
    console.log("Route appelée avec ville :", ville);
    return this.allservice.getTopMedicamentsByViews(ville);
  }
  

  //@UseGuards(JwtAuthGuard)
  @Post('produitrecherches')
  async createRecherche(@Body() body: { date: string, id_pharmacie: string , id_produit: string}) {
    const { date, id_pharmacie, id_produit } = body;
    return await this.allservice.createRecherche(date, id_pharmacie, id_produit);
  }


  @Get('/countmedicament/:id')
  getCountMedicament(@Param('id') id: string) {
    return this.allservice.getCountMedicament({
      id,
    });
  }

  @Get('/sommemedicament/:id')
  getTotalPriceMedicament(@Param('id') id: string) {
    return this.allservice.getTotalPriceMedicament({
      id,
    });
  }

  @Get('pharmacie/:id')
  getFindOnePharmacie(@Param('id') id: string) {
    return this.allservice.getFindPharmacie({
      id,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() body: { nom: string, dosage: string, prix: string, description: string }) {
    const { nom, dosage, prix, description } = body;
    console.log(id);
    return this.allservice.update({ id, nom, dosage, prix, description });
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.allservice.delete({ id });
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() agendadto: ProduitDto) {
    return await this.allservice.create(agendadto);
  }
}
