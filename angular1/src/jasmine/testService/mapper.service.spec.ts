import { async, inject, TestBed } from '@angular/core/testing';
import { of } from "rxjs";
import { DataService } from './data.service';
import { MapperService } from './mapper.service';


describe("service testing", () => {

    /* data */
    let nameIn = "ali"
    let nameOut = "ALI";

    /* spies */
    let dataServiceSpy = jasmine.createSpyObj("dataServiceSpy", ["sayHello"]);
    dataServiceSpy.sayHello.and.returnValue( of("salut " + nameIn) );

    /* module */
    beforeEach( async(() => {

        TestBed.configureTestingModule({

            providers: [
                MapperService,
                {
                    provide: DataService,
                    useValue: dataServiceSpy
                }
            ]
        });
    }));

    /* injection */
    let mapperService: MapperService;
    beforeEach( inject([MapperService], (_mapperService: MapperService) => {
            mapperService = _mapperService;
    }));

    it("test simple var of the service", done => {
        
        mapperService.sayHello(nameIn);

        expect(dataServiceSpy.sayHello).toHaveBeenCalledWith(nameIn);
        expect(mapperService.res).toBe("SALUT " + nameOut);

        /* test asynch call via obs var */
        mapperService.resAsObs.subscribe( res => {

            expect(res).toBe("salut " + nameIn);
            done();
        });
    });

});