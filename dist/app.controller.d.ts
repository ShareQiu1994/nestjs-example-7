import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getIndex(): Object;
    getHello(): string;
    guards(num: number): number;
    interceptors(num: number): string;
    liubf(liubf: string): string;
    getEjs(): Object;
}
