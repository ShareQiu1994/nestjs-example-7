import { WsResponse, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Observable } from 'rxjs';
export declare class EventsGateway implements OnGatewayConnection, OnGatewayDisconnect {
    server: any;
    handleConnection(client: any): void;
    handleDisconnect(client: any): void;
    handleEvent(client: any, data: any): Observable<WsResponse<any>> | any;
}
