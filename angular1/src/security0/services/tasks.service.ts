import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TasksService {

  private serverUrl = "http://localhost:8080";

  private tasksUrl = this.serverUrl + "/tasks";

  private jwt: string = null;

  constructor(private httpClient: HttpClient) { }

  get(): Observable<any> {

    //if(this.jwt == null) {
      this.setJwt();
    //}
    var httpHeaders = new HttpHeaders( { "Authorization" : this.jwt } );
    return this.httpClient.get(this.tasksUrl, { headers: httpHeaders });

  }

  save(task) {
    let httpHeaders = new HttpHeaders();
    httpHeaders.append("Authorization", this.jwt);
    return this.httpClient.post(this.tasksUrl, task, { headers: httpHeaders });
  }

  private setJwt(): void {
    this.jwt = localStorage.getItem("jwt");
  }

}
