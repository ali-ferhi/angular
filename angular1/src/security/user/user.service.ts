import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http'
import { Observable } from 'rxjs';
import { RoleName, User } from './user.entity';
import { UserMapper } from './user.mapper';
import { JwtService } from './jwt.service';
import { NgForm } from '@angular/forms';

@Injectable()
export class UserService {

  constructor(private httpClient: HttpClient, private jwtService: JwtService) { }

  currentUser : User;

  private serverUrl = "http://localhost:8080";

  private loginUrl = this.serverUrl + "/login";

  private usersUrl = this.serverUrl + "/users";

  login(user: NgForm): Observable<HttpResponse<any>> {
    // options => observe : response or body or ...
    return this.httpClient.post<HttpResponse<any>>(this.loginUrl, user, {observe: "response"});
  }

  getUsers(): Observable<Array<User>> {
    let token = this.jwtService.get();
    let httpHeaders = new HttpHeaders( { "Authorization" : token } );
    return this.httpClient.get<Array<User>>(this.usersUrl, { headers: httpHeaders });
  }

  register(userFromForm: NgForm): Observable<User> {
    
    let user = UserMapper.mapUserFromRegisterForm(userFromForm);

    /* headers */
    let token = this.jwtService.get();
    let httpHeaders = new HttpHeaders( { "Authorization" : token } );
        
    return this.httpClient.post<User>(this.usersUrl, user, { headers: httpHeaders });
  }  

  saveTokenAndCreateUser(resp: HttpResponse<any>): void {
    this.jwtService.save(resp);    
    let decodedToken = this.jwtService.getDecoded();    
    this.currentUser = UserMapper.mapUserFromToken(decodedToken);       
  }

  logout(): void {
    this.currentUser = null;   
    this.jwtService.delete();
  }

 }
