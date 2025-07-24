import { Global, Module } from '@nestjs/common'
import { PrismaService } from 'src/shared/services/prisma.service'

const sharedServices = [PrismaService]

@Global()
@Module({
  exports: [...sharedServices],
  providers: [...sharedServices],
})
export class SharedModule {}
