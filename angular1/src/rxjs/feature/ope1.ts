import { of } from 'rxjs';
import { map, reduce, filter } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

export function ope1() {

    let observable1 = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

    let observable2 = observable1.pipe(
        //filter<number>(filterPredicate),
        map(mapper)
        //reduce<number, number>(accumulator, 0)
    )
    
    observable2.subscribe(value => console.log(value));
}

export function ajaxOpe(): void {

    let respObs = ajax("http://localhost:1000/pronodejs1/ws")
                    .pipe(
                        map(ajaxMapper)
                    );
    
    respObs.subscribe
        (
            response => console.log(`id = ${response.id}, name = ${response.name}`)
        );
    
    /*
    var entity = new Entity();
    respObs.subscribe(response => {entity.id = response.id; entity.name = response.name;});
    console.log(`id = ${entity.id}, name = ${entity.name}`);
    */
}

/* private */

/* filter */
let filterPredicate = function (value: number): boolean {
    return value % 2 == 0;
}

/* reduce */
let accumulator = function (acc : number, value : number): number {
    var res: number;
    res = acc + value;
    return res;
}

/* map */
let mapper = function (value: number) : number {
    return value * 2;
}

/* ajax */
let ajaxMapper = function (response: any) : any {
    return response.response;
}
class Entity {
    id: number;
    name: string;
}
