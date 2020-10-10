import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';

describe("testing a module", () => {

    /* 
        defining a module to test
        sync() :  define an asynchronous execution area
    */
    beforeEach( async(() => {

        TestBed.configureTestingModule({

            imports: [

            ], declarations: [

            ], providers: [

            ], schemas: [
                NO_ERRORS_SCHEMA // ignore non defined elements (dependecies of compoenents, ...)
            ]
        });
    }));
});