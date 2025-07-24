import { Module } from '@nestjs/common'

import { AppController } from 'src/app.controller'
import { AppService } from 'src/app.service'
import { PostModule } from 'src/routes/post/post.module'

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [PostModule],
})
export class AppModule {}
