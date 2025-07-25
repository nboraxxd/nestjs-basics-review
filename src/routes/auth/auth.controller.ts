import { Body, ClassSerializerInterceptor, Controller, Post, UseInterceptors } from '@nestjs/common'

import { RegisterBodyDTO, RegisterResDTO } from 'src/routes/auth/auth.dto'
import { AuthService } from 'src/routes/auth/auth.service'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Post('register')
  async register(@Body() body: RegisterBodyDTO) {
    const user = await this.authService.register(body)

    return new RegisterResDTO(user)
  }
}
