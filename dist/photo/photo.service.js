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
exports.PhotoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const photo_entity_1 = require("./photo.entity");
let PhotoService = (() => {
    let PhotoService = class PhotoService {
        constructor(photoRepository) {
            this.photoRepository = photoRepository;
        }
        async findAll() {
            return this.photoRepository.find();
        }
        async add(PhotoArgs) {
            let photo = Object.assign({}, PhotoArgs);
            return this.photoRepository.save(photo);
        }
        async findId(id) {
            let photoRes = await this.photoRepository.findOne({
                id: id,
            });
            if (photoRes)
                return photoRes;
            this.notFoundIdError(id);
        }
        async remove(id) {
            let photo = await this.findId(id);
            if (photo) {
                this.photoRepository.remove(photo);
                return photo;
            }
            this.notFoundIdError(id);
        }
        async update(id, PhotoArgs) {
            let photo = await this.findId(id);
            if (photo) {
                photo = Object.assign(photo, PhotoArgs);
                return this.photoRepository.save(photo);
            }
            this.notFoundIdError(id);
        }
        notFoundIdError(id) {
            throw new common_1.HttpException(`抱歉，指定的id:${id}找不到对应的数据！`, common_1.HttpStatus.FORBIDDEN);
        }
    };
    PhotoService = __decorate([
        common_1.Injectable(),
        __param(0, typeorm_1.InjectRepository(photo_entity_1.Photo)),
        __metadata("design:paramtypes", [typeorm_2.Repository])
    ], PhotoService);
    return PhotoService;
})();
exports.PhotoService = PhotoService;
//# sourceMappingURL=photo.service.js.map