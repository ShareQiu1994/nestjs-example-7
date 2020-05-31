"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const swagger_1 = require("@nestjs/swagger");
const auth_token_dto_1 = require("./DTO/auth-token-dto");
let AuthController = (() => {
    let AuthController = class AuthController {
        constructor(authService) {
            this.authService = authService;
        }
        async createToken(authTokenDto) {
            return await this.authService.signIn(authTokenDto);
        }
        async analysisToken(token) {
            return await this.authService.verify(token);
        }
    };
    __decorate([
        common_1.Post('signInToken'),
        swagger_1.ApiOperation({ summary: '获取token' }),
        __param(0, common_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [auth_token_dto_1.AuthTokenDto]),
        __metadata("design:returntype", Promise)
    ], AuthController.prototype, "createToken", null);
    __decorate([
        common_1.Get('verifyToken'),
        swagger_1.ApiOperation({ summary: '解析token' }),
        swagger_1.ApiQuery({
            name: 'token',
            description: '请输入token',
        }),
        __param(0, common_1.Query('token')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], AuthController.prototype, "analysisToken", null);
    AuthController = __decorate([
        swagger_1.ApiTags('auth'),
        common_1.Controller('auth'),
        __metadata("design:paramtypes", [auth_service_1.AuthService])
    ], AuthController);
    return AuthController;
})();
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map