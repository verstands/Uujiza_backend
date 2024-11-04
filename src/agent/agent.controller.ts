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
  constructor(private readonly agentService: AgentService) { }

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
  update(@Param('id') id: string, @Body() body: { nom: string, prenom: string, email: string, telephone: string }) {
    const { nom, prenom, email, telephone } = body;
    return this.agentService.updateAgent({ id, nom, prenom, email, telephone });
  }

  @Put('forgetpassword/forgetpassword/:email')
  updateForgetPassword(@Param('email') email: string, @Body() body: { password: string }) {
    const { password } = body;
    return this.agentService.forgetpawword({ email, password });
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
