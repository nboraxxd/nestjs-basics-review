import { Module } from '@nestjs/common'
import { AuthService } from 'src/routes/auth/auth.service'
import { AuthController } from 'src/routes/auth/auth.controller'

@Module({
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
