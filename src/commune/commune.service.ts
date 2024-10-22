import { Injectable } from '@nestjs/common';
import { CommuneDto } from 'src/dto/commune.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CommuneService {
    constructor(private readonly prismaservice: PrismaService) {}

  async getAll() {
    const getall = await this.prismaservice.commune.findMany({
      orderBy : {
        id : "desc"
      },
      include : {
          pays : true
      }
    });
    return { data: getall };
  }

  async getFind({ id }: { id: string }) {
    const getid = await this.prismaservice.commune.findUnique({
      where: {
        id,
      },
    });
    return { data: getid };
  }

  async getFindVille({ id }: { id: string }) {
    const getid = await this.prismaservice.commune.findMany({
      where: {
        id_ville : id,
      },
    });
    return { data: getid };
  }

  async update({ id, ...agentUpdate }: { id: string } & CommuneDto) {
    const updatedAgent = await this.prismaservice.commune.update({
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
    await this.prismaservice.commune.delete({
      where: {
        id,
      },
    });
    return { message: 'pharmacie supprimé avec success ' };
  }

  async create(dataall: CommuneDto) {
    const createAgent = await this.prismaservice.commune.create({
      data:  dataall
    });
    return createAgent;
  }
}
