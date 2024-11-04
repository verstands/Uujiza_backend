import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { PharmacieService } from './pharmacie.service';
import { PharmacieDto } from 'src/dto/pharmaciedto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('pharmacie')
export class PharmacieController {
  constructor(private readonly allservice: PharmacieService) { }

  @UseGuards(JwtAuthGuard)
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


  @Get('qt/:id')
  getFindOneqt(@Param('id') id: string) {
    return this.allservice.getFindQuartier({
      id,
    });
  }

  @Get('user/:id')
  getPharmaciceUser(@Param('id') id: string) {
    return this.allservice.getPharmaciceUser({
      id,
    });
  }

  @Get('user/medicament/:id')
  getMymedicamentUser(@Param('id') id: string) {
    return this.allservice.getMymedicamentUser({
      id,
    });
  }

  @Get('user/userid/:id')
  getFindUserID(@Param('id') id: string) {
    return this.allservice.getFindUserID({
      id,
    });
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: { nom: string, communeavenu: string }) {
    const { nom, communeavenu } = body;
    console.log(id);
    return this.allservice.update({ id, nom, communeavenu });
  }

  @Get('activer/activer/:id')
  updateActiver(@Param('id') id: string) {
    return this.allservice.activer({ id });
  }
  
  @Get('desactiver/desactiver/:id')
  updateDesactiver(@Param('id') id: string) {
    return this.allservice.desactiver({ id });
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.allservice.delete({ id });
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() agendadto: PharmacieDto) {
    return await this.allservice.create(agendadto);
  }
}
