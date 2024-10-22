import { IsNotEmpty } from 'class-validator';
export class QuartierDto {
  @IsNotEmpty({
    message: 'Le nom est obligatoire',
  })
  nom : string;

  @IsNotEmpty({
    message: 'Le commune est obligatoire',
  })
  id_commune : string;
}