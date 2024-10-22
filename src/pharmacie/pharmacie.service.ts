import { Injectable } from '@nestjs/common';
import { PharmacieDto } from 'src/dto/pharmaciedto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PharmacieService {
  constructor(private readonly prismaservice: PrismaService) { }

  async getAll() {
    const getall = await this.prismaservice.pharmacices.findMany({
      orderBy: {
        id: "desc"
      },
      include: {
        qurtier: true,
        commune : true,
        villes : true,
        pays : true
      }
    });
    return { data: getall };
  }

  async getFind({ id }: { id: string }) {
    const getid = await this.prismaservice.pharmacices.findUnique({
      where: {
        id,
      },
    });
    return { data: getid };
  }

  async getFindUserID({ id }: { id: string }) {
    const getid = await this.prismaservice.pharmacices.findFirst({
      where: {
        agentsId : id,
      },
      include : {
        qurtier: true,
        commune : true,
        villes : true,
        pays : true
      }
    });
    return { data: getid };
  }

  async getFindQuartier({ id }: { id: string }) {
    const getid = await this.prismaservice.pharmacices.findMany({
      where: {
        id_quartier: id,
      },
    });
    return { data: getid };
  }

  async getPharmaciceUser({ id }: { id: string }) {
    const getid = await this.prismaservice.pharmacices.findFirst({
      where: {
        agentsId: id,
      },
      include: {
        qurtier: true,
        commune : true,
        villes : true,
        pays : true,
        agents : true
      }
    });
    return { data: getid };
  }

  async getMymedicamentUser({ id }: { id: string }) {
    const getid = await this.prismaservice.produits.findMany({
      where : {
        pharmacie : {
          agentsId : id
        }
      },
      include  :{
        pharmacie : true
      }
    });
    return { data: getid };
  }

  async update({ id, ...agentUpdate }: { id: string } & PharmacieDto) {
    const updatedAgent = await this.prismaservice.pharmacices.update({
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
    await this.prismaservice.pharmacices.delete({
      where: {
        id,
      },
    });
    return { message: 'pharmacie supprimé avec success ' };
  }

  async create(dataall: PharmacieDto) {
    const createAgent = await this.prismaservice.pharmacices.create({
      data: dataall
    });
    return createAgent; 
  }
}
