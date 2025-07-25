import { NestFactory } from '@nestjs/core'
import { UnprocessableEntityException, ValidationPipe } from '@nestjs/common'

import { AppModule } from 'src/app.module'
import envConfig from 'src/shared/config'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.useGlobalPipes(
    new ValidationPipe({
      // Tự động loại bỏ các field không được khai báo decorator trong DTO hoặc không tồn tại trong DTO
      whitelist: true,

      // Nếu có field không được khai báo decorator trong DTO hoặc không tồn tại trong DTO thì sẽ báo lỗi
      forbidNonWhitelisted: true,

      // Tự động chuyển đổi dữ liệu sang kiểu được khai báo trong DTO
      transform: true,

      transformOptions: {
        // Tự động chuyển đổi kiểu dữ liệu của các field trong DTO
        enableImplicitConversion: true,
      },

      exceptionFactory: (errors) => {
        return new UnprocessableEntityException({
          message: 'Validation failed',
          errors: errors.map((error) => ({
            field: error.property,
            message: Object.values(error.constraints || {}).join(', '),
          })),
        })
      },
    })
  )
  await app.listen(envConfig.PORT ?? 3000)
}

bootstrap()
