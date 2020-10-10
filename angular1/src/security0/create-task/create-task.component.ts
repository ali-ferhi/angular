import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TasksService } from '../services/tasks.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit {

  task;

  constructor(private tasksService: TasksService, public authService: AuthService) { }

  ngOnInit(): void {
  }

  onSave(task: NgForm) {
    this.tasksService.save(task)
                      .subscribe(
                        resp => {
                          this.task = resp;
                        }, err => {
                          console.log(err);
                          
                        }
                      );
  }

}
