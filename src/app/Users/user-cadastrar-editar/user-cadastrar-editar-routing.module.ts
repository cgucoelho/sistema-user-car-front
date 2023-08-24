import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserCadastrarEditarComponent } from './user-cadastrar-editar/user-cadastrar-editar.component';
import { UserResolverService } from './user-resolver.service';

const routes: Routes = [
  {
    path: "", 
    component: UserCadastrarEditarComponent,
    resolve : {
      idUser : UserResolverService
    } 
     
  }
];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserCadastrarEditarRoutingModule { }
 