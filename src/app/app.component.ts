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
  //si utilizza un altro decoratore @ViewChild('qui si mette
  //il nome assegnato come attributo') poi si mette un nome
  //riconoscitivo e come tipizzazione per best practice si
  //usa ElementRef e questo punto TS ci dara un errore
  //perche per lui il valore potra essere qualsiasi anche
  //null or undefined per risolvere questo problema si mette
  //valoreInput! vorra dire che non sara mai null o undefined.

  //bene adesso andiamo ad inizializzare con onInit
  @ViewChild('inputSaluti') valoreInput!: ElementRef<HTMLInputElement>;
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
  ngOnInit(): void {
    console.log('ngOnInit');
    console.log(this.valoreInput);
  }
  //noteremo che il valore in console risulta undefined
  //perche ngOnInit inizializza solo il componente ma
  //non lo runna affinche venga runnato e il valore
  //renderizzato dobbiamo usare afterviewInit
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    console.log(this.valoreInput);
  }
  //affinche venga mandato in console il valore dell input
  //bisogna mattere il nativeElement. il value dell input
  onClick() {
    console.log(this.valoreInput.nativeElement.value);
  }
}
