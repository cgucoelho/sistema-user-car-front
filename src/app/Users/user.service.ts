import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8080/';
  private endpoint = 'api/users'

  constructor(private http: HttpClient) { }

  listar(): Observable<User[]>{
     return this.http.get<User[]>(`${this.baseUrl}${this.endpoint}`);

  }

 
}
