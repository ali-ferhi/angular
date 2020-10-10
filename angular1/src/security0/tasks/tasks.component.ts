import { Component, OnInit } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  tasks = [];

  constructor(
    private router: Router,
    private tasksService: TasksService,
    public authService: AuthService
    ) { }

  ngOnInit(): void {

    this.tasksService.get()
                      .subscribe(
                        respBody => {
                          this.tasks = respBody;
                        }, err => {
                          this.authService.logout();                          
                          this.router.navigateByUrl("/login");
                        }
                      );

  }

  onCreateTask(): void {
    this.router.navigateByUrl("/create-task");
  }

}
