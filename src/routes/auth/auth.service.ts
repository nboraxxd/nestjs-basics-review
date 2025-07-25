import { Injectable, UnprocessableEntityException } from '@nestjs/common'
import { Prisma } from 'generated/prisma'
import { RegisterBodyDTO } from 'src/routes/auth/auth.dto'

import { HashingService } from 'src/shared/services/hashing.service'
import { PrismaService } from 'src/shared/services/prisma.service'

@Injectable()
export class AuthService {
  constructor(
    private readonly hashingService: HashingService,
    private readonly prismaService: PrismaService
  ) {}

  async register({ email, name, password }: RegisterBodyDTO) {
    try {
      const hashedPassword = await this.hashingService.hash(password)

      await this.prismaService.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
        },
      })

      return { message: 'User registered successfully' }
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
        throw new UnprocessableEntityException('Email already exists')
      }
    }
  }
}
