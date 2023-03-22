import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular-corso';
  isVisible = true;
  isVisible2 = false;
  persone = [
    {
      nome: 'luca',
      cognome: 'rossi',
      isOnline: true,
    },
    {
      nome: 'anna',
      cognome: 'neri',
      isOnline: true,
    },
    {
      nome: 'marco',
      cognome: 'verdi',
      isOnline: false,
    },
  ];
  onInput(e: Event) {
    this.title = (<HTMLInputElement>e.target).value;
  }
  onClick(e: Event) {
    this.title = 'ho cliccato sul bottone';
  }
}
