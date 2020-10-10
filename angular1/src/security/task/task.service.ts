import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { JwtService } from '../user/jwt.service';
import { Task } from './task.entity';

@Injectable()
export class TaskService {

  private serverUrl = "http://localhost:8080";

  private tasksUrl = this.serverUrl + "/tasks";

  constructor(private httpClient: HttpClient, private jwtService: JwtService) { }

  get(): Observable<Task[]> {
    let httpHeaders = new HttpHeaders( { "Authorization" : this.jwtService.get() } );
    return this.httpClient.get<Task[]>(this.tasksUrl, { headers: httpHeaders });
  }

  save(task: NgForm): Observable<Task> {
    let httpHeaders = new HttpHeaders({ "Authorization" : this.jwtService.get() });
    return this.httpClient.post<Task>(this.tasksUrl, task, { headers: httpHeaders });
  }

}
