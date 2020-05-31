"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Liubf = void 0;
const common_1 = require("@nestjs/common");
exports.Liubf = common_1.createParamDecorator((data, request) => {
    return {
        msg: data,
        timestamp: new Date().toISOString(),
        path: request.url,
    };
});
//# sourceMappingURL=liubf.decorator.js.map