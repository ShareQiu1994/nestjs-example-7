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
exports.PhotoResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const recipe_model_1 = require("./models/recipe.model");
const recipes_service_1 = require("./recipes.service");
const recipes_args_1 = require("./dto/recipes.args");
const parseint_pipe_1 = require("../common/pipetransform/parseint.pipe");
let PhotoResolver = (() => {
    var _a, _b;
    let PhotoResolver = class PhotoResolver {
        constructor(photoService) {
            this.photoService = photoService;
        }
        async photoFindAll() {
            return this.photoService.findAll();
        }
        async photoFindId(id) {
            return this.photoService.findId(id);
        }
        async photoAdd(PhotoArgs) {
            return this.photoService.add(PhotoArgs);
        }
        async photoUpdate(id, PhotoArgs) {
            return this.photoService.update(id, PhotoArgs);
        }
        async photoDelete(id) {
            return this.photoService.remove(id);
        }
    };
    __decorate([
        graphql_1.Query(returns => [recipe_model_1.Photo]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], PhotoResolver.prototype, "photoFindAll", null);
    __decorate([
        graphql_1.Query(returns => recipe_model_1.Photo),
        __param(0, graphql_1.Args('id', new parseint_pipe_1.ParseIntPipe())),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", Promise)
    ], PhotoResolver.prototype, "photoFindId", null);
    __decorate([
        graphql_1.Mutation(returns => recipe_model_1.Photo),
        __param(0, graphql_1.Args('photo')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [typeof (_a = typeof recipes_args_1.PhotoArgs !== "undefined" && recipes_args_1.PhotoArgs) === "function" ? _a : Object]),
        __metadata("design:returntype", Promise)
    ], PhotoResolver.prototype, "photoAdd", null);
    __decorate([
        graphql_1.Mutation(returns => recipe_model_1.Photo),
        __param(0, graphql_1.Args('id', new parseint_pipe_1.ParseIntPipe())),
        __param(1, graphql_1.Args('photo')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, typeof (_b = typeof recipes_args_1.PhotoArgs !== "undefined" && recipes_args_1.PhotoArgs) === "function" ? _b : Object]),
        __metadata("design:returntype", Promise)
    ], PhotoResolver.prototype, "photoUpdate", null);
    __decorate([
        graphql_1.Mutation(returns => recipe_model_1.Photo),
        __param(0, graphql_1.Args('id', new parseint_pipe_1.ParseIntPipe())),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", Promise)
    ], PhotoResolver.prototype, "photoDelete", null);
    PhotoResolver = __decorate([
        graphql_1.Resolver(of => recipe_model_1.Photo),
        __metadata("design:paramtypes", [recipes_service_1.PhotoService])
    ], PhotoResolver);
    return PhotoResolver;
})();
exports.PhotoResolver = PhotoResolver;
//# sourceMappingURL=recipes.resolver.js.map