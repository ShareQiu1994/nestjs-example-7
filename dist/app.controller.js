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
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const test_guards_1 = require("./common/guards/test.guards");
const test_interceptor_1 = require("./common/interceptors/test.interceptor");
const liubf_decorator_1 = require("./common/decorator/liubf.decorator");
let AppController = (() => {
    let AppController = class AppController {
        constructor(appService) {
            this.appService = appService;
        }
        getIndex() {
            return { msg: 'Welcome To NestJS! My name is liubf.' };
        }
        getHello() {
            return this.appService.getHello();
        }
        guards(num) {
            return num;
        }
        interceptors(num) {
            return '这是一个普通的拦截器';
        }
        liubf(liubf) {
            return liubf;
        }
        getEjs() {
            return { name: '刘博方' };
        }
    };
    __decorate([
        common_1.Get(),
        common_1.Render('index.ejs'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Object)
    ], AppController.prototype, "getIndex", null);
    __decorate([
        common_1.Get('hello'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", String)
    ], AppController.prototype, "getHello", null);
    __decorate([
        common_1.UseGuards(test_guards_1.TestGuard),
        common_1.Get('guards/:num'),
        __param(0, common_1.Param('num')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", Number)
    ], AppController.prototype, "guards", null);
    __decorate([
        common_1.UseInterceptors(test_interceptor_1.TestInterceptor),
        common_1.Get('interceptors/:num'),
        __param(0, common_1.Param('num')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], AppController.prototype, "interceptors", null);
    __decorate([
        common_1.Get('liubf'),
        __param(0, liubf_decorator_1.Liubf('刘博方')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], AppController.prototype, "liubf", null);
    __decorate([
        common_1.Get('ejs'),
        common_1.Render('test.ejs'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Object)
    ], AppController.prototype, "getEjs", null);
    AppController = __decorate([
        common_1.Controller(),
        __metadata("design:paramtypes", [app_service_1.AppService])
    ], AppController);
    return AppController;
})();
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map