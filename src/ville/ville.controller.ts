import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { VilleService } from './ville.service';
import { VilleDto } from 'src/dto/ville.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('ville')
export class VilleController {
    constructor(private readonly allservice: VilleService) {}

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

  @Get('pays/:id')
  getFindOnePays(@Param('id') id: string) {
    return this.allservice.getFindPays({
      id,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() agentUpdate: VilleDto) {
    return this.allservice.update({ id, ...agentUpdate });
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.allservice.delete({ id });
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() agendadto: VilleDto) {
    return await this.allservice.create(agendadto);
  }
}
