import { Injectable } from '@nestjs/common';
import { CarouselDto } from 'src/dto/carousel.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CarouselService {
    constructor(private readonly prismaservice: PrismaService) {}

  async getAll() {
    const getall = await this.prismaservice.slider.findMany({
      orderBy : {
        id : "desc"
      },
    });
    return { data: getall };
  }

  async update({ id, ...agentUpdate }: { id: string } & CarouselDto) {
    const updatedAgent = await this.prismaservice.slider.update({
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
    await this.prismaservice.slider.delete({
      where: {
        id,
      },
    });
    return { message: 'image supprimé avec success ' };
  }

  async create(dataall: CarouselDto) {
    const createAgent = await this.prismaservice.slider.create({
      data:  dataall
    });
    return createAgent;
  }
}
