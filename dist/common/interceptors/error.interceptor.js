"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorInterceptor = void 0;
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
let ErrorInterceptor = (() => {
    let ErrorInterceptor = class ErrorInterceptor {
        intercept(context, next) {
            const request = context.switchToHttp().getRequest();
            return next.handle().pipe(operators_1.catchError(err => {
                throw new common_1.HttpException({
                    status: common_1.HttpStatus.FORBIDDEN,
                    message: err.message,
                }, 403);
            }));
        }
    };
    ErrorInterceptor = __decorate([
        common_1.Injectable()
    ], ErrorInterceptor);
    return ErrorInterceptor;
})();
exports.ErrorInterceptor = ErrorInterceptor;
//# sourceMappingURL=error.interceptor.js.map