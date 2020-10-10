import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { LoginComponent } from './user/login/login.component';
import { AccountComponent } from './user/account/account.component';
import { RegisterComponent } from './user/register/register.component';
import { TasksComponent } from './task/tasks/tasks.component';
import { CreateTaskComponent } from './task/create-task/create-task.component';
import { UsersComponent } from './user/users/users.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "account", component: AccountComponent },
  { path: "account/users", component: UsersComponent },
  { path: "tasks", component: TasksComponent },
  { path: "create-task", component: CreateTaskComponent },  
  { path: "", redirectTo: "/home", pathMatch: "full" }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
