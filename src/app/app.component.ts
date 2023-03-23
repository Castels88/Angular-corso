import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'Angular-corso';
  valore = 'Property-binding';
  colore = 'green';
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
  ngOnInit(): void {}

  ngAfterViewInit(): void {}
  cambiaEvidenziatore(colore: string) {
    this.colore = colore;
  }
}
