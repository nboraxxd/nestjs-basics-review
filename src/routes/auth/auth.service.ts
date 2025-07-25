import { Injectable, UnprocessableEntityException } from '@nestjs/common'
import { Prisma } from 'generated/prisma'

import { HashingService } from 'src/shared/services/hashing.service'
import { PrismaService } from 'src/shared/services/prisma.service'

@Injectable()
export class AuthService {
  constructor(
    private readonly hashingService: HashingService,
    private readonly prismaService: PrismaService
  ) {}

  async register(body: any): Promise<any> {
    try {
      const hashedPassword = await this.hashingService.hash(body.password)

      await this.prismaService.user.create({
        data: {
          email: body.email,
          password: hashedPassword,
          name: body.name,
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
