import { UserService } from './user.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/environment/environment';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, catchError, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isLoggedIn$: Observable<boolean> = this.isLoggedInSubject.asObservable();

  constructor(
    private http: HttpClient,
    private router: Router,
    private userService: UserService
  ) {
    this.isLoggedInSubject.next(this.loggedIn());
  }

  setLoggedIn(value: boolean): void {
    this.isLoggedInSubject.next(value);
  }

  signup(username: string, email: string, password: string): any {
    return this.http.post(API_URL + '/auth/signup', { username, email, password }).subscribe(
      (data: any) => {
        console.log(data);
        //this.setLoggedIn(true);
        this.router.navigate(['/signin']);
      }
    )
  }

  login(username: string, password: string): any {
    return this.http.post(`${API_URL}/auth/signin`, { username, password }).subscribe(
      (data: any) => {
        console.log(data);
        this.setToken(data.accessToken);
        this.userService.setUser(data);
        this.setLoggedIn(true);
        this.router.navigate(['/']);
      },
      (error) => {
        console.log(error);
        this.setLoggedIn(false);
      }
    );
  }

  logout(): void {
    localStorage.removeItem('token');
    this.setLoggedIn(false);
    this.router.navigate(['/signin']);
  }

  loggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

}
