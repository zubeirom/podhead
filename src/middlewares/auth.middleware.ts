import {Injectable, NestMiddleware, UnauthorizedException} from '@nestjs/common';
import {Request, Response} from 'express';
import {validateToken, getToken} from "../utils";

@Injectable()
export class AuthMiddleware implements NestMiddleware {
    async use(req: Request, res: Response, next: Function) {
        try {
            const token = getToken(req.headers.authorization);
            await validateToken(token);
            next();
        } catch (e) {
            console.error(e);
            throw new UnauthorizedException('Unauthorized Request');
        }
    }
}