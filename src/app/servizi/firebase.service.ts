import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  //andiamo a creare la patchPersona
  //che avra 3 parametri l url e l id ma anche un oggetto
  //che modificherà i dati
  //che saranno come sappiamo delle stringhe
  //andiamo ad implementarlo nel dashboard.ts
  insertPersona(url: string, body: {}) {
    return this.http.post(url, body);
  }
  getPersone(url: string) {
    return this.http.get(`${url}?auth=${this.authService.user.token}`);
  }
  deletePersona(url: string, id: string) {
    return this.http.delete(`${url}/${id}.json`);
  }
  patchPersona(url: string, id: string, body: {}) {
    return this.http.patch(`${url}/${id}.json`, body);
  }
}
