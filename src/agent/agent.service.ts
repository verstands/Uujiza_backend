import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AgentInterface } from 'src/dto/agent.dto';
import { PrismaService } from 'src/prisma.service';
import { hash, compare } from 'bcrypt';


@Injectable()
export class AgentService {
  constructor(private readonly prismaservice: PrismaService) { }

  async getAgents() {
    const agents = await this.prismaservice.agents.findMany({

      orderBy: {
        id: "desc"
      },
    });
    return { data: agents };
  }

  async getAgent({ id }: { id: string }) {
    const agent = await this.prismaservice.agents.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        nom: true,
        prenom: true,
        statut: true,
        email: true,
      },
    });
    return { data: agent };
  }

  async updateAgent({ id, nom, prenom, email, telephone  }: { id: string, nom : string, prenom : string, email: string, telephone : string }) {
    const updatedAgent = await this.prismaservice.agents.update({
      where: {
        id,
      },
      data: {
        nom : nom,
        prenom : prenom,
        email : email,
        telephone : telephone
      },
    });
    return updatedAgent;
  }

  async deleteAgent({ id }: { id: string }) {
    //await this.prismaservice.fonctions.deleteMany({
    // where : {
    // agents : id
    //}
    //})
    await this.prismaservice.agents.delete({
      where: {
        id,
      },
    });
    return { message: 'Agent supprimé avec success ' };
  }

  async getAgentsByFonctions(fonctionIds: number[] | string[]) {
    const agents = await this.prismaservice.agents.findMany({
      where: {
        id_fonction: {
          in: fonctionIds.map(String),
        },
      },
    });
    return { data: agents };
  }


  async create(dataall: AgentInterface) {
    const existeEmail = await this.prismaservice.agents.findUnique({
      where: {
        email: dataall.email,
      },
    });
    if (existeEmail) {
      throw new HttpException("Email existe déjà !", HttpStatus.CONFLICT);
    }
    const hashedPassword = await this.hasPassword(dataall.mdp);
    const createAgent = await this.prismaservice.agents.create({
      data: {
        ...dataall,
        mdp: hashedPassword, 
      },
    });

    return createAgent;
  }

  private async hasPassword(password: string) {
    const hashedPassword = await hash(password, 10);
    return hashedPassword;
  }
}
