import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http'
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthService {

  private serverUrl = "http://localhost:8080";

  private loginUrl = this.serverUrl + "/login";

  private roles: Array<any>;

  constructor(private httpClient: HttpClient) { }

  login(user: any): Observable<any> {

      // options => observe : response or body or ...
      return this.httpClient.post(this.loginUrl, user, {observe: "response"});
  }

  save(jwt: string): void {
    localStorage.setItem("jwt", jwt);
    var jwtHelper = new JwtHelperService();
    this.roles = jwtHelper.decodeToken(jwt).roles;
    console.log("roles = ");
    console.log(this.roles);    
  }

  logout() {
    localStorage.removeItem("jwt");
  }

  isWriter(): boolean {

    for(let role of this.roles) {
      if(role.authority == "writer") {
        return true;
      }
    }

    return false;
  }
}
