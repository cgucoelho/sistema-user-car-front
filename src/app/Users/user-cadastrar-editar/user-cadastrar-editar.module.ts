import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserCadastrarEditarRoutingModule } from './user-cadastrar-editar-routing.module';
import { UserCadastrarEditarComponent } from './user-cadastrar-editar/user-cadastrar-editar.component';


@NgModule({
  declarations: [
    UserCadastrarEditarComponent
  ],
  imports: [
    CommonModule,
    UserCadastrarEditarRoutingModule
  ]
})
export class UserCadastrarEditarModule { }
