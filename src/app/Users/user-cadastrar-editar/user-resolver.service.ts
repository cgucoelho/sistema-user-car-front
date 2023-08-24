import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserResolverService  implements Resolve<User>{
  
  constructor(private userService: UserService) { }

  resolve(route: ActivatedRouteSnapshot):Observable<User>{
    const id = route.params["id"];
    if (id) {
      return this.userService.buscarPorId(id);
    }    
    return of({} as User);;
  }
}
