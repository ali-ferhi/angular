import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { RoutingModule } from './routing.module';
import { RootComponent } from './main/root/root.component';
import { LoginComponent } from './user/login/login.component';
import { NavComponent } from './main/nav/nav.component';
import { RegisterComponent } from './user/register/register.component';
import { TasksComponent } from './task/tasks/tasks.component';
import { CreateTaskComponent } from './task/create-task/create-task.component';
import { UserService } from './user/user.service';
import { TaskService } from './task/task.service';
import { HomeComponent } from './main/home/home.component';
import { AccountComponent } from './user/account/account.component';
import { UsersComponent } from './user/users/users.component';
import { JwtService} from './user/jwt.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RoutingModule
  ],
  declarations: [
    RootComponent,
    LoginComponent,
    NavComponent,
    RegisterComponent,
    TasksComponent,
    CreateTaskComponent,
    HomeComponent,
    AccountComponent,
    UsersComponent
  ],
  providers: [
    JwtService,
    UserService,
    TaskService
  ],
  bootstrap: [ RootComponent ]
})
export class SecurityModule { }
