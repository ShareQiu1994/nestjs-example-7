"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GqlAuthGuard = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const graphql_1 = require("@nestjs/graphql");
let GqlAuthGuard = (() => {
    let GqlAuthGuard = class GqlAuthGuard extends passport_1.AuthGuard('jwt') {
        getRequest(context) {
            const ctx = graphql_1.GqlExecutionContext.create(context);
            return ctx.getContext().req;
        }
    };
    GqlAuthGuard = __decorate([
        common_1.Injectable()
    ], GqlAuthGuard);
    return GqlAuthGuard;
})();
exports.GqlAuthGuard = GqlAuthGuard;
//# sourceMappingURL=jwt.graphql.strategy.js.map