import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserListarRoutingModule } from './user-listar-routing.module';
import { UserListarComponent } from './user-listar/user-listar.component';


@NgModule({
  declarations: [
    UserListarComponent
  ],
  imports: [
    CommonModule,
    UserListarRoutingModule
  ]
})
export class UserListarModule { }
