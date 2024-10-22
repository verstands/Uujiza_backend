import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { PaysService } from './pays.service';
import { PaysDto } from 'src/dto/pays.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('pays')
export class PaysController {
    constructor(private readonly allservice: PaysService) {}

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
  update(@Param('id') id: string, @Body() agentUpdate: PaysDto) {
    return this.allservice.update({ id, ...agentUpdate });
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.allservice.delete({ id });
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() agendadto: PaysDto) {
    return await this.allservice.create(agendadto);
  }
}
