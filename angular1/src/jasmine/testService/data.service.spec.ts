import { async, inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DataService } from "./data.service";

describe("http testing", () => {

    beforeEach( async(() => {

        TestBed.configureTestingModule({
            imports: [ HttpClientTestingModule ],
            providers: [ DataService ]
        });
    }));

    let dataService: DataService;
    let httpServerMock: HttpTestingController;
    beforeEach( inject(
        [DataService, HttpTestingController],
        (_dataService: DataService, _httpServerMock: HttpTestingController) => {
            dataService = _dataService;
            httpServerMock = _httpServerMock;
      }));

    it("test 1", () => {

        dataService.sayHello("ali").subscribe( resp => {
            expect(resp).toBe("hello ali!");
        });
  
        let req = httpServerMock.expectOne({
          url: "/hello?name=ali",
          method: "GET"
        });
  
        req.flush('hello ali!', { status: 200, statusText: 'ok' }); // execute the request  
    });

    afterEach( () => {
        httpServerMock.verify(); // verify that all requests are terminated
    });
});