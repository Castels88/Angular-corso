import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular-corso';

  persone = [
    {
      nome: 'luca',
      cognome: 'rossi',
      isOnline: true,
      color: 'green',
    },
    {
      nome: 'anna',
      cognome: 'neri',
      isOnline: true,
      color: 'pink',
    },
    {
      nome: 'marco',
      cognome: 'verdi',
      isOnline: false,
      color: 'blue',
    },
    {
      nome: 'leonardo',
      cognome: 'qwerty',
      isOnline: true,
      color: 'yellow',
    },
    {
      nome: 'pannocchia',
      cognome: 'babbo',
      isOnline: false,
      color: 'red',
    },
  ];
  onClick() {
    this.persone = [
      {
        nome: 'mario',
        cognome: 'rossi',
        isOnline: true,
        color: 'green',
      },
      {
        nome: 'gianni',
        cognome: 'neri',
        isOnline: true,
        color: 'pink',
      },
      {
        nome: 'gigi',
        cognome: 'marrone',
        isOnline: false,
        color: 'blue',
      },
      {
        nome: 'fica',
        cognome: 'qwerty',
        isOnline: true,
        color: 'yellow',
      },
      {
        nome: 'pelato',
        cognome: 'babbo',
        isOnline: false,
        color: 'red',
      },
    ];
  }
}
