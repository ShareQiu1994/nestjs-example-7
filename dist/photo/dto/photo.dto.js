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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhotoArgs = void 0;
const class_validator_1 = require("class-validator");
const type_graphql_1 = require("type-graphql");
const swagger_1 = require("@nestjs/swagger");
let PhotoArgs = (() => {
    let PhotoArgs = class PhotoArgs {
    };
    __decorate([
        type_graphql_1.Field({ nullable: true }),
        class_validator_1.IsOptional(),
        class_validator_1.IsString({
            message: 'name字段必须字符串',
        }),
        swagger_1.ApiProperty({
            name: 'name',
        }),
        __metadata("design:type", String)
    ], PhotoArgs.prototype, "name", void 0);
    __decorate([
        type_graphql_1.Field({ nullable: true }),
        class_validator_1.IsOptional(),
        class_validator_1.IsString({
            message: 'description字段必须字符串',
        }),
        swagger_1.ApiProperty({
            name: 'description',
        }),
        __metadata("design:type", String)
    ], PhotoArgs.prototype, "description", void 0);
    __decorate([
        type_graphql_1.Field({ nullable: true }),
        class_validator_1.IsOptional(),
        class_validator_1.IsString({
            message: 'filename字段必须字符串',
        }),
        swagger_1.ApiProperty({
            name: 'filename',
        }),
        __metadata("design:type", String)
    ], PhotoArgs.prototype, "filename", void 0);
    __decorate([
        type_graphql_1.Field({ nullable: true }),
        class_validator_1.IsOptional(),
        class_validator_1.IsInt({
            message: 'views字段必须为数值',
        }),
        swagger_1.ApiProperty({
            name: 'views',
        }),
        __metadata("design:type", Number)
    ], PhotoArgs.prototype, "views", void 0);
    __decorate([
        type_graphql_1.Field({ nullable: true }),
        class_validator_1.IsOptional(),
        class_validator_1.IsBoolean({
            message: 'isPublished字段必须布尔值',
        }),
        swagger_1.ApiProperty({
            name: 'isPublished',
        }),
        __metadata("design:type", Boolean)
    ], PhotoArgs.prototype, "isPublished", void 0);
    PhotoArgs = __decorate([
        type_graphql_1.InputType()
    ], PhotoArgs);
    return PhotoArgs;
})();
exports.PhotoArgs = PhotoArgs;
//# sourceMappingURL=photo.dto.js.map