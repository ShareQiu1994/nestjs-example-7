import { AuthService } from './auth.service';
import { AuthTokenDto } from './DTO/auth-token-dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    createToken(authTokenDto: AuthTokenDto): Promise<any>;
    analysisToken(token: string): Promise<any>;
}
