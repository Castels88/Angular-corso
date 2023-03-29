import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(private http: HttpClient) {}

  //andiamo a scrivere la nostra funzione per il get
  //stavolta pero senza body perche i dati che riceviamo hanno gia un body
  //adesso invece di amdare in dasboard andiamo in contatti.ts=>
  insertPersona(url: string, body: {}) {
    return this.http.post(url, body);
  }
  getPersone(url: string) {
    return this.http.get(url);
  }
}
