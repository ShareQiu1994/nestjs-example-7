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
exports.EventsGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
let EventsGateway = (() => {
    let EventsGateway = class EventsGateway {
        handleConnection(client) {
            console.log('客户端(' + client.handshake.address + ')已与服务器建立socket.io链接...');
        }
        handleDisconnect(client) {
            console.log('客户端(' + client.handshake.address + ')已与服务器断开socket.io链接...');
        }
        handleEvent(client, data) {
            console.log(JSON.stringify(data));
            this.server.emit('events', {
                event: 'events',
                data: {
                    msg: 'hello 这是服务器返回的数据! 接收到了客户端数据' +
                        JSON.stringify(data),
                },
            });
        }
    };
    __decorate([
        websockets_1.WebSocketServer(),
        __metadata("design:type", Object)
    ], EventsGateway.prototype, "server", void 0);
    __decorate([
        websockets_1.SubscribeMessage('events'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Object)
    ], EventsGateway.prototype, "handleEvent", null);
    EventsGateway = __decorate([
        websockets_1.WebSocketGateway()
    ], EventsGateway);
    return EventsGateway;
})();
exports.EventsGateway = EventsGateway;
//# sourceMappingURL=socket.gateway.js.map