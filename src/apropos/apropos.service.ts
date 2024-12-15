import { Injectable } from '@nestjs/common';
import { AproposDto } from 'src/dto/apropos.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AproposService {
    constructor(private readonly prismaservice: PrismaService) {}

  async getAll() {
    const getall = await this.prismaservice.apropos.findMany({
      orderBy : {
        id : "desc"
      },
    });
    return { data: getall };
  }

  async getFind({ id }: { id: string }) {
    const getid = await this.prismaservice.apropos.findUnique({
      where: {
        id,
      },
    });
    return { data: getid };
  }

  async update({ id, ...agentUpdate }: { id: string } & AproposDto) {
    const updatedAgent = await this.prismaservice.apropos.update({
      where: {
        id,
      },
      data: {
        ...agentUpdate,
      },
    });
    return updatedAgent;
  }

  async delete({ id }: { id: string }) {
    await this.prismaservice.apropos.delete({
      where: {
        id,
      },
    });
    return { message: 'pays supprimé avec success ' };
  }

  async create(dataall: AproposDto) {
    const createAgent = await this.prismaservice.apropos.create({
      data:  dataall
    });
    return createAgent;
  }
}
