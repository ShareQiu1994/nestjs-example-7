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
exports.PhotoController = void 0;
const common_1 = require("@nestjs/common");
const photo_service_1 = require("./photo.service");
const swagger_1 = require("@nestjs/swagger");
const passport_1 = require("@nestjs/passport");
const photo_args_1 = require("./dto/photo.args");
const parseint_pipe_1 = require("../common/pipetransform/parseint.pipe");
const error_interceptor_1 = require("../common/interceptors/error.interceptor");
const http_exception_filter_1 = require("../common/exception/http-exception.filter");
let PhotoController = (() => {
    let PhotoController = class PhotoController {
        constructor(photoService) {
            this.photoService = photoService;
        }
        findAll() {
            return this.photoService.findAll();
        }
        add(PhotoArgs) {
            return this.photoService.add(PhotoArgs);
        }
        findId(id) {
            return this.photoService.findId(id);
        }
        async remove(id) {
            return this.photoService.remove(id);
        }
        async update(id, PhotoArgs) {
            return this.photoService.update(id, PhotoArgs);
        }
    };
    __decorate([
        common_1.Get(),
        swagger_1.ApiOperation({ summary: '获取所有photo' }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], PhotoController.prototype, "findAll", null);
    __decorate([
        common_1.Post(),
        swagger_1.ApiOperation({ summary: '新增photo' }),
        __param(0, common_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [photo_args_1.PhotoArgs]),
        __metadata("design:returntype", Promise)
    ], PhotoController.prototype, "add", null);
    __decorate([
        common_1.Get(':id'),
        swagger_1.ApiParam({
            name: 'id',
            description: '参数id',
        }),
        swagger_1.ApiOperation({ summary: '根据id获取指定photo' }),
        __param(0, common_1.Param('id', new parseint_pipe_1.ParseIntPipe())),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", Promise)
    ], PhotoController.prototype, "findId", null);
    __decorate([
        common_1.Delete(':id'),
        swagger_1.ApiOperation({ summary: '根据id删除photo' }),
        __param(0, common_1.Param('id', new parseint_pipe_1.ParseIntPipe())),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", Promise)
    ], PhotoController.prototype, "remove", null);
    __decorate([
        common_1.Put(':id'),
        swagger_1.ApiOperation({ summary: '根据id修改photo' }),
        __param(0, common_1.Param('id', new parseint_pipe_1.ParseIntPipe())),
        __param(1, common_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, photo_args_1.PhotoArgs]),
        __metadata("design:returntype", Promise)
    ], PhotoController.prototype, "update", null);
    PhotoController = __decorate([
        swagger_1.ApiTags('photo'),
        common_1.Controller('photo'),
        swagger_1.ApiBearerAuth(),
        common_1.UseGuards(passport_1.AuthGuard('jwt')),
        common_1.UseInterceptors(error_interceptor_1.ErrorInterceptor),
        common_1.UseFilters(http_exception_filter_1.HttpExceptionFilter),
        __metadata("design:paramtypes", [photo_service_1.PhotoService])
    ], PhotoController);
    return PhotoController;
})();
exports.PhotoController = PhotoController;
//# sourceMappingURL=photo.controller.js.map