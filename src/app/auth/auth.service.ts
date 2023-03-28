import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

//creaimo la nostra variabile e la associamo ad una funzione
//torniamo al nostro html =>
export class AuthService {
  isLoggedIn: false;

  constructor() {}

  isAuthenticated() {
    return this.isLoggedIn;
  }
}
