import { JwtModule, JwtService } from '@nestjs/jwt';
import { PrismaService } from './../prisma/prisma.service';
/*
https://docs.nestjs.com/providers#services
*/

import { ForbiddenException, Injectable } from '@nestjs/common';
import { AuthDTO } from './dto';
import * as argon from 'argon2';

@Injectable()
export class AuthService {
  constructor(
    private PrismaService: PrismaService,
    private JwtService: JwtService,
  ) {}
  async register(authDTO: AuthDTO) {
    try {
      const hashedPassword = await argon.hash(authDTO.password);
      const user = await this.PrismaService.user.create({
        data: {
          email: authDTO.email,
          hashedPassword: hashedPassword,
          firstName: '',
          lastName: '',
        },
        select: {
          id: true,
          email: true,
          firstName: true,
          lastName: true,
          createdAt: true,
        },
      });

      return await this.JwtToken(user.id, user.email);
    } catch (error) {
      if (error.code === 'P2002') {
        throw new ForbiddenException('Email has already been');
      }
    }
  }
  async login(authDTO: AuthDTO) {
    const user = await this.PrismaService.user.findFirst({
      where: {
        email: authDTO.email,
      },
    });

    if (!user) {
      throw new ForbiddenException('Email not found');
    }

    const passwordMatched = await argon.verify(
      user.hashedPassword,
      authDTO.password,
    );

    if (!passwordMatched) {
      throw new ForbiddenException('Invalid password');
    }
    delete user.hashedPassword;
    return await this.JwtToken(user.id, user.email);
  }

  async JwtToken(
    userId: number,
    email: string,
  ): Promise<{ accessToken: string }> {
    const payload = {
      userId: userId,
      email: email,
    };
    const JwtString = await this.JwtService.signAsync(payload, {
      expiresIn: '1d',
      secret: process.env.JWT_SECRET,
    });

    return {
      accessToken: JwtString,
    };
  }
}
