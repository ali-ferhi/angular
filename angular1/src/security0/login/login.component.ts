import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  error: boolean = false;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  onLogin(user: NgForm): void {

    this.authService.login(user)
                    .subscribe(
                      response => {
                        this.error = false;
                        let jwt: string = response.headers.get("Authorization");
                        this.authService.save(jwt);
                        this.router.navigateByUrl("/account");
                      }, err => {
                        this.error = true;
                      }
                    );
  }

  onRegister(): void {
    console.log("registration");
  }

}
