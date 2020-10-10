import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { RoleName } from '../user.entity';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  constructor(private router: Router, public userService: UserService) { }

  ngOnInit(): void {}

  onLogout(): void {
    this.userService.logout();
    this.router.navigateByUrl("/home");
  }

}
