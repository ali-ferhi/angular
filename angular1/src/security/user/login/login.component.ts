import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isFormHasError: boolean = false;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
  }

  onLogin(user: NgForm): void {

    this.userService.login(user)
                    .subscribe(
                      resp => {
                        this.userService.saveTokenAndCreateUser(resp);
                        this.isFormHasError = false;
                        this.router.navigateByUrl("/account");
                      }, err => {
                        // todo : tech/fct error handling
                        this.isFormHasError = true; // fct error handling
                      }
                    );
  }

}
