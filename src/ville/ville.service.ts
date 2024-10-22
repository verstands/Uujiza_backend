import { Injectable } from '@nestjs/common';
import { VilleDto } from 'src/dto/ville.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class VilleService {
    constructor(private readonly prismaservice: PrismaService) {}

    async getAll() {
      const getall = await this.prismaservice.villes.findMany({
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
      const getid = await this.prismaservice.villes.findUnique({
        where: {
          id,
        },
      });
      return { data: getid };
    }

    async getFindPays({ id }: { id: string }) {
      const getid = await this.prismaservice.villes.findMany({
        where: {
          id_pays : id,
        },
      });
      return { data: getid };
    }
  
    async update({ id, ...agentUpdate }: { id: string } & VilleDto) {
      const updatedAgent = await this.prismaservice.villes.update({
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
      await this.prismaservice.villes.delete({
        where: {
          id,
        },
      });
      return { message: 'villes supprimé avec success ' };
    }
  
    async create(dataall: VilleDto) {
      const createAgent = await this.prismaservice.villes.create({
        data:  dataall
      });
      return createAgent;
    }
}
