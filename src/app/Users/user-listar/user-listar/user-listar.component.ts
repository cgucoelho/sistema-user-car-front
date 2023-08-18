import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { Observable } from 'rxjs';
import { User } from '../../user.model';

@Component({
  selector: 'app-user-listar',
  templateUrl: './user-listar.component.html',
  styleUrls: ['./user-listar.component.scss']
})
export class UserListarComponent implements OnInit{

  users$: Observable<User[]>;

  displayedColumns = ['id', 'firstName', 'lastName', 'email', 'birthday' ,'login', 'phone' ]

  constructor(private userService : UserService) { }

  ngOnInit() {
    this.listarUsers();
  }

  listarUsers(){
    this.users$ = this.userService.listar();
  }

}
