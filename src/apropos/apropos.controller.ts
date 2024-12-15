import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { AproposService } from './apropos.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ContatcDto } from 'src/dto/contact.dto';
import { AproposDto } from 'src/dto/apropos.dto';

@Controller('apropos')
export class AproposController {
    constructor(private readonly allservice: AproposService) {}

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

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() agentUpdate: AproposDto) {
    return this.allservice.update({ id, ...agentUpdate });
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.allservice.delete({ id });
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() agendadto: AproposDto) {
    return await this.allservice.create(agendadto);
  }
}
