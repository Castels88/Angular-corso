import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn: false;
  url =
    'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDZLPM-SAjl0omQYXNE4RFGOtFFkh334d4';
  constructor(private http: HttpClient) {}

  isAuthenticated() {
    return this.isLoggedIn;
  }
  //adesso dobbiamo creare il nostro signUp metodo .
  //dobbiamo richiamare il nostro http metodo
  //per quanto riguardo url dobbiamo prendere quello dalla
  //documentazione di firebase
  signUp(body: {}) {
    return this.http.post(this.url, body);
  }
}
