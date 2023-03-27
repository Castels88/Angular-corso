import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServizioProvaService {
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
  //andiamo a richiamare il nostro servizio nel prova component.ts=>
  constructor() {}
}
