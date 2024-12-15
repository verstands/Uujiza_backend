import { IsNotEmpty } from 'class-validator';
export class AproposDto {
  @IsNotEmpty({
    message: 'Le text est obligatoire',
  })
  description : string;
}