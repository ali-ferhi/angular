import { TestBed, async, inject, fakeAsync, tick, flush } from '@angular/core/testing';
import { AsyncService } from './async.service';

describe("AsyncService", () => {

    beforeEach( async(() => {
        TestBed.configureTestingModule({
            providers: [ AsyncService ]
        });
    }));

    let asyncService: AsyncService;
    beforeEach( inject([AsyncService], (_asyncService: AsyncService) => {
        asyncService = _asyncService;
    }));

    it('should return true', fakeAsync( () => { // define async zone

        asyncService.getValueAfterTimer();
  
        tick(25);
        expect(asyncService.value).toBe(false);
        tick(25);
        expect(asyncService.value).toBe(true);
  
    }));

    it('should return true', fakeAsync(() => { 
 
        asyncService.getValueAfterTimer();
     
        flush();
        expect(asyncService.value).toBe(true);
         
    }));

});