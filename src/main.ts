import { NestFactory } from '@nestjs/core'; // NestFactory 暴露了一些静态方法用于创建应用实例
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { ValidationPipe } from './common/pipes/validation.pipe';
import { LoggingInterceptor } from './common/interceptors/logging.interceptor';
import { AppModule } from './app.module'; // 入口（根）应用模块类（class），用作 创建应用实例 的参数

async function bootstrap() {
  // 创建 NestApplication(Nest应用) 实例: INestApplication
  const app = await NestFactory.create(AppModule);

  // 全局使用中间件
  // app.use(logger)

  // 全局过滤器
  app.useGlobalFilters(new HttpExceptionFilter());

  // 全局管道
  // app.useGlobalPipes(new ValidationPipe());

  // 全局拦截器
  // app.useGlobalInterceptors(new LoggingInterceptor());

  // 设置swagger文档相关配置
  const swaggerOptions = new DocumentBuilder()
    .setTitle('nest-starter api document')
    .setDescription('nest starter project api document')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, swaggerOptions);
  SwaggerModule.setup('doc', app, document);

  // 启动应用
  await app.listen(3000);
}
bootstrap();
