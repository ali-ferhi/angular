import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[textDirective]'
})
export class TextDirective {

  constructor(elt: ElementRef) {
    console.log(elt);
    elt.nativeElement.innerText = "text introduced by textDirective";
  }

}
