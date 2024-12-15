import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ContatcDto } from 'src/dto/contact.dto';
import { PrismaService } from 'src/prisma.service';
import { ContactService } from './contact.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('contact')
export class ContactController {
    constructor(private readonly allservice: ContactService) {}

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
  update(@Param('id') id: string, @Body() agentUpdate: ContatcDto) {
    return this.allservice.update({ id, ...agentUpdate });
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.allservice.delete({ id });
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() agendadto: ContatcDto) {
    return await this.allservice.create(agendadto);
  }
}
