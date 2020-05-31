"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const path_1 = require("path");
const common_1 = require("@nestjs/common");
const platform_socket_io_1 = require("@nestjs/platform-socket.io");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useWebSocketAdapter(new platform_socket_io_1.IoAdapter(app));
    app.useStaticAssets(path_1.join(__dirname, '..', 'public'), {
        prefix: '/static/',
    });
    app.setBaseViewsDir(path_1.join(__dirname, '..', 'views'));
    app.setViewEngine('ejs');
    app.useGlobalPipes(new common_1.ValidationPipe());
    const options = new swagger_1.DocumentBuilder()
        .setTitle('liubf Api')
        .setDescription('The cats API description')
        .setVersion('1.0')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('/api-docs', app, document);
    await app.listen(3000);
    console.log('\x1B[33mNestJS程序启动成功！\x1B[0m\x1B[36mhttp://localhost:3000\x1B[0m');
}
bootstrap();
//# sourceMappingURL=main.js.map