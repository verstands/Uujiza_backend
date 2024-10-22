import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { CommuneService } from './commune.service';
import { CommuneDto } from 'src/dto/commune.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('commune')
export class CommuneController {
    constructor(private readonly allservice: CommuneService) {}

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

  @Get('ville/:id')
  getFindOneVille(@Param('id') id: string) {
    return this.allservice.getFindVille({
      id,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() agentUpdate: CommuneDto) {
    return this.allservice.update({ id, ...agentUpdate });
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.allservice.delete({ id });
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() agendadto: CommuneDto) {
    return await this.allservice.create(agendadto);
  }
}
