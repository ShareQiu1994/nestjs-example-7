"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_strategy_1 = require("./jwt.strategy");
const auth_service_1 = require("./auth.service");
const auth_controller_1 = require("./auth.controller");
const jwt_1 = require("@nestjs/jwt");
const auth_constants_1 = require("./auth.constants");
let AuthModule = (() => {
    let AuthModule = class AuthModule {
    };
    AuthModule = __decorate([
        common_1.Module({
            imports: [
                jwt_1.JwtModule.register({
                    secret: auth_constants_1.jwtConstants.secret,
                    signOptions: {
                        expiresIn: 3600,
                    },
                }),
            ],
            controllers: [auth_controller_1.AuthController],
            providers: [auth_service_1.AuthService, jwt_strategy_1.JwtStrategy],
        })
    ], AuthModule);
    return AuthModule;
})();
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map