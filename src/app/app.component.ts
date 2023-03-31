import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { ServizioProvaService } from './servizi/servizio-prova.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Angular-corso';
  numero = 5;
  oggi = Date.now();

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    if (localStorage.getItem('user')) {
      const user = JSON.parse(localStorage.getItem('user'));
      this.authService.createUser(
        user.email,
        user.id,
        user._token,
        user._expirationDate
      );
    }
  }
  onLogout() {
    this.authService.logout();
  }
}
