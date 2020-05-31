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
exports.NewPhotoInput = void 0;
const type_graphql_1 = require("type-graphql");
let NewPhotoInput = (() => {
    let NewPhotoInput = class NewPhotoInput {
    };
    __decorate([
        type_graphql_1.Field(type => String),
        __metadata("design:type", String)
    ], NewPhotoInput.prototype, "name", void 0);
    __decorate([
        type_graphql_1.Field(type => String),
        __metadata("design:type", String)
    ], NewPhotoInput.prototype, "description", void 0);
    __decorate([
        type_graphql_1.Field(type => String),
        __metadata("design:type", String)
    ], NewPhotoInput.prototype, "filename", void 0);
    __decorate([
        type_graphql_1.Field(type => type_graphql_1.Int),
        __metadata("design:type", Number)
    ], NewPhotoInput.prototype, "views", void 0);
    __decorate([
        type_graphql_1.Field(type => Boolean),
        __metadata("design:type", Boolean)
    ], NewPhotoInput.prototype, "isPublished", void 0);
    NewPhotoInput = __decorate([
        type_graphql_1.ArgsType()
    ], NewPhotoInput);
    return NewPhotoInput;
})();
exports.NewPhotoInput = NewPhotoInput;
//# sourceMappingURL=new.photo.args.js.map