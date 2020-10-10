import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
  }

  onAccessAccount(): void {
    if(this.userService.currentUser != null) {
      this.router.navigateByUrl("/account");
    } else {
      this.router.navigateByUrl("/login");
    }
  }

  onConsultTasks(): void {
    if(this.userService.currentUser != null) {
      this.router.navigateByUrl("/tasks");
    } else {
      this.router.navigateByUrl("/login");
    }
  }

}
