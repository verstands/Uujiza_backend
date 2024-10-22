import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { QuartierService } from './quartier.service';
import { QuartierDto } from 'src/dto/quartier.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('quartier')
export class QuartierController {
    constructor(private readonly allservice: QuartierService) {}

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

  @Get('commune/:id')
  getFindOneCommune(@Param('id') id: string) {
    return this.allservice.getFindCommune({
      id,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() agentUpdate: QuartierDto) {
    return this.allservice.update({ id, ...agentUpdate });
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.allservice.delete({ id });
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() agendadto: QuartierDto) {
    return await this.allservice.create(agendadto);
  }
}
