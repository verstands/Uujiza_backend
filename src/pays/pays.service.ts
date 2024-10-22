import { Injectable } from '@nestjs/common';
import { PaysDto } from 'src/dto/pays.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PaysService {
    constructor(private readonly prismaservice: PrismaService) {}

  async getAll() {
    const getall = await this.prismaservice.pays.findMany({
      orderBy : {
        id : "desc"
      },
    });
    return { data: getall };
  }

  async getFind({ id }: { id: string }) {
    const getid = await this.prismaservice.pays.findUnique({
      where: {
        id,
      },
    });
    return { data: getid };
  }

  async update({ id, ...agentUpdate }: { id: string } & PaysDto) {
    const updatedAgent = await this.prismaservice.pays.update({
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
    await this.prismaservice.pays.delete({
      where: {
        id,
      },
    });
    return { message: 'pays supprimé avec success ' };
  }

  async create(dataall: PaysDto) {
    const createAgent = await this.prismaservice.pays.create({
      data:  dataall
    });
    return createAgent;
  }
}
