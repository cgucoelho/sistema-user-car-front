import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserListarRoutingModule } from './user-listar-routing.module';
import { UserListarComponent } from './user-listar/user-listar.component';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    UserListarComponent
  ],
  imports: [
    CommonModule,
    UserListarRoutingModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatButtonModule
    
  ]
})
export class UserListarModule { }
