import {
  Module,
  NestModule,
  RequestMethod,
  MiddlewareConsumer,
} from '@nestjs/common';
import { LoggerMiddleware } from './common/middlewares/logger.middleware';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Photo } from './photo/photo.entity';
import { GraphQLModule } from '@nestjs/graphql';
import { SocketModule } from './socket/socket.module';
import { PhotoModule } from './photo/photo.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'lbf@2018',
      database: 'ptyt',
      entities: [Photo],
      synchronize: true, // 是否同步
    }),
    AuthModule,
    PhotoModule,
    SocketModule,
    GraphQLModule.forRoot({
      playground: true, // 开启调试界面
      autoSchemaFile: 'schema.gql', // 放个该名字的空文件，底层会读取Nest形式的schema然后生成graphql原始的sehema里面
      installSubscriptionHandlers: true, // 使用订阅就要开启这个参数
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // 应用
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL }); // 指定那些路由需要经过中间件 *表示通配符
  }
}
