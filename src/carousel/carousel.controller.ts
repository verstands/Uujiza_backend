import { BadRequestException, Body, Controller, Delete, Get, Param, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { CarouselService } from './carousel.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { SliderInterface } from 'src/dto/slider';

@Controller('carousel')
export class CarouselController {
  constructor(private readonly roleservice: CarouselService) { }

  @Get()
  get() {
    return this.roleservice.get();
  }

  @Get(':id')
  getApplication(@Param('id') id: string) {
    return this.roleservice.getId({ id });
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.roleservice.delete({ id });
  }



  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, callback) => {
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
          const fileExtName = extname(file.originalname);
          const fileName = `${file.fieldname}-${uniqueSuffix}${fileExtName}`;
          callback(null, fileName);
        },
      }),
    }),
  )
  async createAgenda(
    @Body() pieceJointDto: SliderInterface,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return await this.roleservice.create(pieceJointDto, file);
  }




}
