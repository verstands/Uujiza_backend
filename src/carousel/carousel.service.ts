import { Injectable } from '@nestjs/common';
import { CarouselDto } from 'src/dto/carousel.dto';
import { SliderInterface } from 'src/dto/slider';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CarouselService {
    constructor(private readonly prismaservice: PrismaService) {}

    async get() {
      const data = await this.prismaservice.slider.findMany({
        orderBy: {
          id: 'desc',
        },
      });
    
      const baseUrl = 'http://185.182.186.58:4001/uploads';
    
      const filesWithUrls = data.map((pieceJoint) => {
        const fileUrl = `${baseUrl}/${pieceJoint.file}`;
        return { ...pieceJoint, fileUrl };
      });
    
      return { data: filesWithUrls };
    }
  
  
  
  
    async getId({ id }: { id: string }) {
      const data = await this.prismaservice.slider.findUnique({
        where: {
          id: id,
        },
      });
      return { data: data };
    }
  
    async update({ id, nom }: { id: string, nom : string }) {
      const update = await this.prismaservice.slider.update({
        where: {
          id,
        },
        data: {
          file : nom
        },
      });
      return update;
    }
  
    async delete({ id }: { id: string }) {
      await this.prismaservice.slider.delete({
        where: {
          id,
        },
      });
      return { message: 'Pièce jointe supprimée avec succès' };
    }
  
  
    async create(pieceJointDto: SliderInterface, file: Express.Multer.File) {
      const createData = { ...pieceJointDto, file: file.filename }; 
      const newPieceJoint = await this.prismaservice.slider.create({
        data: createData,
      });
  
      return newPieceJoint;
    }
  
  
  
}
