import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router,
  CanActivateChild, CanLoad, Route } from '@angular/router';
import {AuthService} from './auth.service';
import {KeycloakService} from "keycloak-angular";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(
    private auth: AuthService, 
    private router: Router,
    private keycloakService: KeycloakService
    ) { }

  canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
    // return new Promise((resolve) => {
    //   if (this.auth.isAuthenticated()) {
    //     resolve(true);
    //   } else {
    //     this.router.navigate(['/login']);
    //     resolve(false);
    //   }
    // });
    return this.canActivate(null, null);
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    // return new Promise((resolve) => {
    //   // console.log(`auth guard running`);
    //   if (this.auth.isAuthenticated()) {
    //     resolve(true);
    //   } else {
    //     // this.router.navigate(['/auth/login']);
    //     resolve(false);
    //   }
    // });
    return new Promise((resolve) => {
      this.keycloakService.getToken().then(function (token) {
        if (token) {
          resolve(true);
        }else{
          resolve(false);
        }
      })
    })
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return this.canActivate(childRoute, state);
  }
}
