import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AgentService } from './agent.service';
import { AgentInterface } from 'src/dto/agent.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('agent')
export class AgentController {
  constructor(private readonly agentService: AgentService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  getAgents() {
    return this.agentService.getAgents();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  getAgent(@Param('id') id: string) {
    return this.agentService.getAgent({ 
      id,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  updateAgent(@Param('id') id: string, @Body() agentUpdate: AgentInterface) {
    return this.agentService.updateAgent({ id, ...agentUpdate });
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  deleteAgent(@Param('id') id: string) {
    return this.agentService.deleteAgent({ id });
  }

  @UseGuards(JwtAuthGuard)
  @Post('by-fonctions')
  getAgentsByFonctions(@Body() body: { fonctionIds: string[] }) {
    const { fonctionIds } = body;
    return this.agentService.getAgentsByFonctions(fonctionIds);
  }

  @Post()
  cretae(@Body() data: AgentInterface) {
    return this.agentService.create(data);
  }
}
