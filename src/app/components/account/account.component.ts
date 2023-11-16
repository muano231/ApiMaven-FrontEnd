import { UserService } from './../../services/user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  user: any;

  constructor(
    private userService: UserService
  ) {

  }

  ngOnInit(): void {
    this.user = this.userService.getUser();
  }

  editProfile(): void {

  }

  changePassword(): void {

  }



}
