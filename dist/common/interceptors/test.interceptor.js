"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestInterceptor = void 0;
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
let TestInterceptor = (() => {
    let TestInterceptor = class TestInterceptor {
        intercept(context, next) {
            console.log('Before...');
            const now = Date.now();
            const request = context.switchToHttp().getRequest();
            request.params.num = Number(request.params.num) + 10;
            return next
                .handle()
                .pipe(operators_1.map(data => ({
                msg: data,
                parma: `接收的参数是:${request.params.num}`,
                date: `访问拦截器共计耗时:${Date.now() - now}ms`,
            })))
                .pipe(operators_1.tap(res => {
                console.log(res);
                console.log(`After... ${Date.now() - now}ms`);
            }));
        }
    };
    TestInterceptor = __decorate([
        common_1.Injectable()
    ], TestInterceptor);
    return TestInterceptor;
})();
exports.TestInterceptor = TestInterceptor;
//# sourceMappingURL=test.interceptor.js.map