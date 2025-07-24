import { Module } from '@nestjs/common'

import { PostController } from 'src/routes/post/post.controller'
import { PostService } from 'src/routes/post/post.service'

@Module({
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}
