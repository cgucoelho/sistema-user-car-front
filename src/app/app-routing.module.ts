import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "users",
    loadChildren: () => import('./Users/user-listar/user-listar.module').then(modulo => modulo.UserListarModule)
  },
  {
    path: "users/cadastrar",
    loadChildren: () => import('./Users/user-cadastrar-editar/user-cadastrar-editar.module').then(modulo => modulo.UserCadastrarEditarModule)
  },
  {
    path: "users/editar/:id",
    loadChildren: () => import('./Users/user-cadastrar-editar/user-cadastrar-editar.module').then(modulo => modulo.UserCadastrarEditarModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
