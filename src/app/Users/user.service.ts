import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private endpoint = 'http://localhost:8080/api/users';


  constructor(private http: HttpClient) { }

  listar(): Observable<User[]>{
     return this.http.get<User[]>(`${this.endpoint}`);

  }

 
}
