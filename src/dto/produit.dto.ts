import { IsNotEmpty, IsNumber } from 'class-validator';

export class ProduitDto {
  @IsNotEmpty({
    message: 'Le nom est obligatoire',
  })
  nom: string;

  @IsNotEmpty({
    message: 'Le champ dosage est obligatoire',
  })
  dosage: string;

  @IsNotEmpty({
    message: 'Le champ prix est obligatoire',
  })
  prix: string;  
  @IsNotEmpty({
    message: 'Le champ desciption est obligatoire',
  })
  description: string;

  @IsNotEmpty({
    message: 'Le champ pharmacie est obligatoire',
  })
  id_pharmacie: string;
}
