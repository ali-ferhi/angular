import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

    constructor(private httpClient: HttpClient) {}

    sayHello(name: string): Observable<string> {

        //return of("hello " + name + "!");

        let url = `/hello?name=${name}`;
        return this.httpClient.get<string>(url);
    }
}