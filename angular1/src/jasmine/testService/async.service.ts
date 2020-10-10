import { Injectable } from '@angular/core';

@Injectable()
export class AsyncService {

    value = false;
 
    // we don't control the execution of this timer, then we must manage an asynchronous zone
    getValueAfterTimer = () => {
    
        setTimeout( () => 
            {
                this.value = true;
            },
            50
        );            
    }

}