import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  regitrationMsg: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  onRegister(user: NgForm) {
    this.userService.register(user)
                    .subscribe(
                      respBody => {
                        this.regitrationMsg = "success to register the user";                     
                      }, err => {
                        this.regitrationMsg = "error at registration the user";
                        console.log("error at registration the user");
                        console.log(err);                        
                      }
                    );
  }

}
