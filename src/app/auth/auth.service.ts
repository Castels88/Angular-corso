import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './../modelli/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = true;
  signUpUrl =
    'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDZLPM-SAjl0omQYXNE4RFGOtFFkh334d4';
  signInurl =
    'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDZLPM-SAjl0omQYXNE4RFGOtFFkh334d4';

  //creiamo la varibiale user e associamo la classe User
  user: User;
  constructor(private http: HttpClient) {}

  isAuthenticated() {
    return this.isLoggedIn;
  }
  //creiamo la funzione che assegnera i dati ad user
  //adesso dobbiamo far si che dopo il log venga creato questo user
  //abbiamo detto al login quindi andiamo nel signIn.ts

  createUser(email: string, id: string, token: string, expirationDate: Date) {
    this.user = new User(email, id, token, expirationDate);
    this.isLoggedIn = true;
  }
  signUp(email: string, password: string) {
    return this.http.post(this.signUpUrl, {
      email: email,
      password: password,
      returnSecureToken: true,
    });
  }
  //stessa cosa del signUP pero firebase ha un endpoint diverso
  //quindi andiamo a cambiare url mettedno quello corretto
  signIn(email: string, password: string) {
    return this.http.post(this.signInurl, {
      email: email,
      password: password,
      returnSecureToken: true,
    });
  }
  logout() {
    this.isLoggedIn = false;
    this.user = null;
    localStorage.removeItem('user');
  }
}
