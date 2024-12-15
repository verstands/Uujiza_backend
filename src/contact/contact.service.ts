import { Injectable } from '@nestjs/common';
import { ContatcDto } from 'src/dto/contact.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ContactService {
    constructor(private readonly prismaservice: PrismaService) {}

  async getAll() {
    const getall = await this.prismaservice.contact.findMany({
      orderBy : {
        id : "desc"
      },
    });
    return { data: getall };
  }

  async getFind({ id }: { id: string }) {
    const getid = await this.prismaservice.contact.findUnique({
      where: {
        id,
      },
    });
    return { data: getid };
  }

  async update({ id, ...agentUpdate }: { id: string } & ContatcDto) {
    const updatedAgent = await this.prismaservice.contact.update({
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
    await this.prismaservice.contact.delete({
      where: {
        id,
      },
    });
    return { message: 'pays supprimé avec success ' };
  }

  async create(dataall: ContatcDto) {
    const createAgent = await this.prismaservice.contact.create({
      data:  dataall
    });
    return createAgent;
  }
}
