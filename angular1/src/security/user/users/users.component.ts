import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user.entity';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users : Array<User> = [];

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();    
  }

  getUsers() {
    this.userService.getUsers()
                    .subscribe(
                      (respBody: User[]) => {                       
                        this.users = respBody;
                        console.log("users = ");                        
                        console.log(this.users);
                        console.log(typeof this.users);                       
                      }, err => {
                        console.log("err = ");
                        console.log(err);                        
                      }
                    );
  }

  onRegister(): void {
    this.router.navigateByUrl("/register");
  }

}
