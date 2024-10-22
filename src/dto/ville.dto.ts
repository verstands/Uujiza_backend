import { IsNotEmpty } from 'class-validator';
export class VilleDto {
  @IsNotEmpty({
    message: 'Le nom est obligatoire',
  })
  nom : string;

  @IsNotEmpty({
    message: 'Le pays est obligatoire',
  })
  id_pays : string;
}