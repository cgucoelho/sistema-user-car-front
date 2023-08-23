import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserCadastrarEditarRoutingModule } from './user-cadastrar-editar-routing.module';
import { UserCadastrarEditarComponent } from './user-cadastrar-editar/user-cadastrar-editar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';



@NgModule({
  declarations: [
    UserCadastrarEditarComponent
  ],
  imports: [
    CommonModule,
    UserCadastrarEditarRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule
  ]
})
export class UserCadastrarEditarModule { }
