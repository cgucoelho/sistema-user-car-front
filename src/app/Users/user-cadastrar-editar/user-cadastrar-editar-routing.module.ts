import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserCadastrarEditarComponent } from './user-cadastrar-editar/user-cadastrar-editar.component';

const routes: Routes = [
  {path: "", component: UserCadastrarEditarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserCadastrarEditarRoutingModule { }
