import { APP_INTERCEPTOR } from '@nestjs/core'
import { ClassSerializerInterceptor, Module } from '@nestjs/common'

import { PostModule } from 'src/routes/post/post.module'
import { SharedModule } from 'src/shared/shared.module'
import { AuthModule } from 'src/routes/auth/auth.module'

@Module({
  imports: [PostModule, SharedModule, AuthModule],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    },
  ],
})
export class AppModule {}
