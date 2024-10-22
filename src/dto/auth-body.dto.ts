import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class AuthBody {
  @IsEmail(
    {},
    {
      message: 'Vous devez fournir une adresse email valide',
    },
  )
  email: string;

  @IsNotEmpty({
    message: 'Le champ mot de passe est obligatoire',
  })
  @MinLength(5, {
    message: 'Votre mot de passe doit faire plus de 5 caracteres.',
  })
  password: string;
}
