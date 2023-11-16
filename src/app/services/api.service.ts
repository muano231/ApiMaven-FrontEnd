import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl: String = API_URL;

  constructor(private http: HttpClient) { }


}
