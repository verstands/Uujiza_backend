import { IsNotEmpty } from 'class-validator';
export class ContatcDto {
  @IsNotEmpty({
    message: 'Le titre est obligatoire',
  })
  titre : string;

  @IsNotEmpty({
    message: 'Le message est obligatoire',
  })
  message : string;
}