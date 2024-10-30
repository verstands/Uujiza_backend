import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AuthBody } from 'src/dto/auth-body.dto';
import { PrismaService } from 'src/prisma.service';
import { hash, compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UserPayload } from 'src/interface/userperload';

@Injectable()
export class AuthService {
  constructor(
    private readonly prismaservice: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async login(authBody: AuthBody) {
    const hashePassword = await this.hasPassword(authBody.password);
    console.log(hashePassword, authBody.password);
    const existeEmail = await this.prismaservice.agents.findUnique({
      where: {
        email: authBody.email,
      },
    });

    if (!existeEmail) {
      throw new HttpException("Email n'existe pas", HttpStatus.CONFLICT);
    }
    const isPasswordValide = await this.isPasswordValide(
      authBody.password,
      existeEmail.mdp,
    );

    if (!isPasswordValide) {
      throw new HttpException(
        "Le mot de passe n'est pas valide",
        HttpStatus.CONFLICT,
      );
    }
    
    const payload: UserPayload = { userid: existeEmail.id };
    const accessToken = await this.jwtService.sign(payload);

    return {
      access_token: accessToken,
      agent: existeEmail,
    };
  }

  private async hasPassword(password: string) {
    const hashePassword = await hash(password, 10);
    return hashePassword;
  }

  private async isPasswordValide(password: string, hashPassword: string) {
    const isPasswordValide = await compare(password, hashPassword);
    return isPasswordValide;
  }

  private async authenticateUser(userid: string) {
    const payload: UserPayload = { userid };
    return {
      access_token: await this.jwtService.sign(payload),
    };
  }
}
