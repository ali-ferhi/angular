import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { RoutingModule } from './routing.module';
import { RootComponent } from './root/root.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { RegisterComponent } from './register/register.component';
import { TasksComponent } from './tasks/tasks.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { AuthService } from './services/auth.service';
import { TasksService } from './services/tasks.service';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';

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
    AccountComponent
  ],
  providers: [
    AuthService,
    TasksService
  ],
  bootstrap: [ RootComponent ]
})
export class SecurityModule { }
