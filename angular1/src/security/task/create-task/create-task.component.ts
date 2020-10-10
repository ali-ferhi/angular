import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TaskService } from '..//task.service';
import { Task } from '../task.entity';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit {

  creationMsg: string;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }

  onCreate(task: NgForm) {
    this.taskService.save(task)
                    .subscribe(
                      (respBody: Task) => {
                        this.creationMsg = "success to create the task";
                      }, err => {
                        this.creationMsg = "error at creation the task";
                        console.log("error at creation the task");
                        console.log(err);                       
                      }
                    );
  }

}
