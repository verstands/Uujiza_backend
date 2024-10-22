import { IsNotEmpty } from 'class-validator';
export class PaysDto {
  @IsNotEmpty({
    message: 'Le nom est obligatoire',
  })
  nom : string;
}