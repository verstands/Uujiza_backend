import { IsNotEmpty } from 'class-validator';
export class CarouselDto {
  @IsNotEmpty({
    message: 'Le image est obligatoire',
  })
  nom : string;
}