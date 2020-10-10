import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpResponse } from '@angular/common/http';
import { Token } from './token.entity';

@Injectable()
export class JwtService {

    private tokenName: string = "jwt";

    private httpHeader: string = "Authorization";

    private jwtHelper = new JwtHelperService();

    get(): string {
        return localStorage.getItem(this.tokenName);
    }

    getDecoded(): Token {       
        return this.jwtHelper.decodeToken(this.get());
    }

    save(resp: HttpResponse<any>) {
        let jwt: string = resp.headers.get(this.httpHeader);
        localStorage.setItem(this.tokenName, jwt);
    }

    delete(): void {
        localStorage.removeItem(this.tokenName);
    }

}