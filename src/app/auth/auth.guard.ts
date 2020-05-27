import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanLoad, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from './auth.service';
import {take,tap, switchMap} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(private service:AuthService,private router:Router){}

  canLoad(route: import("@angular/router").Route, segments: import("@angular/router").UrlSegment[]): boolean | Observable<boolean> | Promise<boolean> {
    return (this.service.userIsAuthenticated as Observable<boolean>).pipe(take(1),
    switchMap(userIsAuthenticated=>{
      if(!userIsAuthenticated){
        return this.service.autologin()
      }else{
        return of(userIsAuthenticated)
      }
    }),
    tap(userIsAuthenticated=>{
      if(!userIsAuthenticated){
        this.router.navigateByUrl("/auth")
      }
    }))
  }
  
  
}
