import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
export class AgentInterface {
  @IsNotEmpty({
    message: 'Le champ nom est obligatoire',
  })
  nom: string;

  @IsNotEmpty({
    message: 'Le champ telephone est obligatoire',
  })
  telephone: string;

  @IsNotEmpty({
    message: 'Le champ role est obligatoire',
  })
  id_fonction: string

  @IsNotEmpty({
    message: 'Le champ prénom est obligatoire',
  })
  prenom: string;

  @IsNotEmpty({
    message: 'Le champ mot de passe est obligatoire',
  })
  @MinLength(4, {
    message: 'Votre mot de passe doit faire plus de 5 caracteres. ',
  })
  mdp: string;

  @IsNotEmpty({
    message: 'Le champ statut est obligatoire',
  })
  statut: string;

  @IsEmail(
    {},
    {
      message: 'Vous devez fournir une adresse email valide',
    },
  )
  email: string;
}
