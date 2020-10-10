import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';
import { UserService } from '../../user/user.service';
import { Task } from '../task.entity';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [];

  constructor(
    private router: Router,
    private taskService: TaskService,
    public userService: UserService
    ) { }

  ngOnInit(): void {    
    this.getTasks();
  }

  getTasks(): void {

    this.taskService.get()
                    .subscribe(
                      respBody => {
                        this.tasks = respBody;
                      }, err => {
                        console.log("error when getting tasks");
                        console.log(err);                                                
                      }
                    );
  }

  onCreateTask(): void {
    this.router.navigateByUrl("/create-task");
  }

}
