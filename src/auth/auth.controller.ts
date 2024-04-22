import { AuthDTO } from './dto';
import { AuthService } from './auth.service';
/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private AuthService: AuthService) {}

  @Post('/register')
  async register(@Body() body: AuthDTO) {
    return this.AuthService.register(body);
  }

  @Post('/login')
  login(@Body() body: AuthDTO) {
    return this.AuthService.login(body);
  }
}
