import { Module } from '@nestjs/common'

import { PostModule } from 'src/routes/post/post.module'
import { SharedModule } from 'src/shared/shared.module'

@Module({
  imports: [PostModule, SharedModule],
})
export class AppModule {}
