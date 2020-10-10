import { Observer } from 'rxjs';

export class StringObserver implements Observer<string> {
    
    constructor(private name: string) {}
 
    next(value: string): void {
        console.log(`StringObserver[${this.name}].value = ${value}`);
    };

    error(error: any): void {
        console.log("StringObserver.error :");
        console.log(error);
    }    
    
    complete(): void {
        console.log(`StringObserver[${this.name}].complete`);
    }
}