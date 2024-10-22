import { IsNotEmpty } from 'class-validator';
export class CommuneDto {
  @IsNotEmpty({
    message: 'Le nom est obligatoire',
  })
  nom : string;

  @IsNotEmpty({
    message: 'Le champ ville est obligatoire',
  })
  id_ville : string;
}