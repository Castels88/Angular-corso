import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  //nel servizio come prima cosa andiamo riempire il constructor
  //aggiungendo http module della lezione precedente
  //
  constructor(private http: HttpClient) {}

  //adesso andiamo a creare le funzioni per le http request
  //gli sto dicendo prendi la variabile http.fammi una post.('qui URL,qui
  //ci va il body cioè il contenuto della chiamata che è un {} ')
  //non scordiamoci la tipizzazione quindi andiamo a metterli come parametri
  //importante mettere il return senno non parte
  //adesso dobbiamo importare questo servizio nel dashboard.ts=>
  insertPersona(url: string, body: {}) {
    return this.http.post(url, body);
  }
}
