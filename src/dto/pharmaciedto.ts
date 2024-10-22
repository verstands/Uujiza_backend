import { IsNotEmpty } from 'class-validator';
export class PharmacieDto {
  @IsNotEmpty({
    message: 'Le nom est obligatoire',
  })
  nom: string;

  @IsNotEmpty({
    message: 'Le champ utilisateur est obligatoire',
  })
  agentsId: string;

  @IsNotEmpty({
    message: 'Le champ commune est obligatoire',
  })
  idcommune: string; 

  @IsNotEmpty({
    message: 'Le champ avenu est obligatoire',
  })
  communeavenu: string;

  @IsNotEmpty({
    message: 'Le champ quartier est obligatoire',
  })
  id_quartier: string;

  @IsNotEmpty({
    message: 'Le champ ville est obligatoire',
  })
  idville: string;

  @IsNotEmpty({
    message: 'Le champ pays est obligatoire',
  })
  idpays: string;

  image: string;
  id_user: string;
}
