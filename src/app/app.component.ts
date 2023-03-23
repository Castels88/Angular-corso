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
  //in cui scriveremo la nostra funzione che riceve l evento con attrubuto value che
  //sara una stringa perche noi lo sappiamo e facciamo il console.log
  riceviDatiEvento(value: string) {
    console.log(value);
  }
}
