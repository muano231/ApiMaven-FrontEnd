import { AuthService } from 'src/app/services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isUserLoggedIn: boolean = false;

  constructor(
    private authService: AuthService
  ) {
    this.authService.isLoggedIn$.subscribe((isLoggedIn) => {
      this.isUserLoggedIn = isLoggedIn;
    });
  }

  logout(): void {
    this.authService.logout();
    this.authService.setLoggedIn(false);
  }

}
