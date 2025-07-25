import { Module } from '@nestjs/common'

import { PostModule } from 'src/routes/post/post.module'
import { SharedModule } from 'src/shared/shared.module'
import { AuthModule } from 'src/routes/auth/auth.module'

@Module({
  imports: [PostModule, SharedModule, AuthModule],
  controllers: [],
})
export class AppModule {}
