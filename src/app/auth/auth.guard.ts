import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
//quello che dobbiamo fare è inserire il nostro service di auth
//quindi invece di tru importiamo il nostro servizio auth con la sua
//funzione isAuthenticated()
//adesso ci spostiamo sul routing.ts=>
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authService.isAuthenticated();
  }
}
