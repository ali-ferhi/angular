import { Component, OnInit } from '@angular/core';
import { SqrtPipe } from './sqrt.pipe'

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {

  val = 2;

  constructor() { }

  ngOnInit(): void {
  }

}
