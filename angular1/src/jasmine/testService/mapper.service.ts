import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class MapperService {

    res: string;

    resAsObs = new BehaviorSubject<string>("say hello");

    constructor(private dataService: DataService) {}

    sayHello = (name : string) => {
        this.dataService
            .sayHello(name)
            .subscribe(
                res => {
                    this.res = res.toLocaleUpperCase();
                    this.resAsObs.next(res);
                }
            );
    }

}