import { Global, Module } from '@nestjs/common'
import { PrismaService } from 'src/shared/services/prisma.service'
import { HashingService } from 'src/shared/services/hashing.service'

const sharedServices = [PrismaService, HashingService]

@Global()
@Module({
  exports: [...sharedServices],
  providers: [...sharedServices],
})
export class SharedModule {}
