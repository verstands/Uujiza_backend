import { Injectable } from '@nestjs/common';
import { QuartierDto } from 'src/dto/quartier.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class QuartierService {
    constructor(private readonly prismaservice: PrismaService) {}

  async getAll() {
    const getall = await this.prismaservice.quartier.findMany({
      orderBy : {
        id : "desc"
      },
      include : {
        commune : true
      }
    });
    return { data: getall };
  }

  async getFind({ id }: { id: string }) {
    const getid = await this.prismaservice.quartier.findUnique({
      where: {
        id,
      },
      include : {
        commune : true
      }
    });
    return { data: getid };
  }

  async getFindCommune({ id }: { id: string }) {
    const getid = await this.prismaservice.quartier.findMany({
      where: {
        id_commune : id,
      },
      include : {
        commune : true
      }
    });
    return { data: getid };
  }

  async update({ id, ...agentUpdate }: { id: string } & QuartierDto) {
    const updatedAgent = await this.prismaservice.quartier.update({
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
    await this.prismaservice.quartier.delete({
      where: {
        id,
      },
    });
    return { message: 'quartier supprimé avec success ' };
  }

  async create(dataall: QuartierDto) {
    const createAgent = await this.prismaservice.quartier.create({
      data:  dataall
    });
    return createAgent;
  }
}
