import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListarComponent } from './user-listar/user-listar.component';

const routes: Routes = [
  {path: "", component: UserListarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserListarRoutingModule { }
