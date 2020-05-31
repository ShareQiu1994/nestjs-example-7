import { JwtService } from '@nestjs/jwt';
import { AuthTokenDto } from './DTO/auth-token-dto';
export declare class AuthService {
    private readonly jwtService;
    constructor(jwtService: JwtService);
    signIn(authTokenDto: AuthTokenDto): Promise<string>;
    verify(token: string): Promise<any>;
    validateUser(payload: any): Promise<any>;
}
