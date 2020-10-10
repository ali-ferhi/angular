import { Component, OnInit } from '@angular/core';
import { basic2 as observable } from '../feature/observable2';
import { ajaxOpe as ope } from '../feature/ope1';
import { asynch as subjet } from '../feature/subject';
import { fct1 as scheduler } from '../feature/scheduler';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    /* feature */
    this.feature();
  }

  feature(): void {

    /* observable */
    //observable();
    
    /* operator */
    ope();

    /* subject */
    //subjet();

    /* scheduler */
    //scheduler();
  }

}
