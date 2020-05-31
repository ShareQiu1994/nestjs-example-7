"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const logger_middleware_1 = require("./common/middlewares/logger.middleware");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const auth_module_1 = require("./auth/auth.module");
const typeorm_1 = require("@nestjs/typeorm");
const photo_entity_1 = require("./photo/photo.entity");
const graphql_1 = require("@nestjs/graphql");
const socket_module_1 = require("./socket/socket.module");
const photo_module_1 = require("./photo/photo.module");
let AppModule = (() => {
    let AppModule = class AppModule {
        configure(consumer) {
            consumer
                .apply(logger_middleware_1.LoggerMiddleware)
                .forRoutes({ path: '*', method: common_1.RequestMethod.ALL });
        }
    };
    AppModule = __decorate([
        common_1.Module({
            imports: [
                typeorm_1.TypeOrmModule.forRoot({
                    type: 'postgres',
                    host: 'localhost',
                    port: 5432,
                    username: 'postgres',
                    password: 'lbf@2018',
                    database: 'ptyt',
                    entities: [photo_entity_1.Photo],
                    synchronize: true,
                }),
                auth_module_1.AuthModule,
                photo_module_1.PhotoModule,
                socket_module_1.SocketModule,
                graphql_1.GraphQLModule.forRoot({
                    playground: true,
                    autoSchemaFile: 'schema.gql',
                    installSubscriptionHandlers: true,
                }),
            ],
            controllers: [app_controller_1.AppController],
            providers: [app_service_1.AppService],
        })
    ], AppModule);
    return AppModule;
})();
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map