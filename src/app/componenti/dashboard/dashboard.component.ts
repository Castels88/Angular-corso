import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  numero = 5;
  sottoscrizione: any;
  constructor() {}
  ngOnInit(): void {
    this.sottoscrizione = interval(1000).subscribe((numero) => {
      console.log('dalla dashboard', numero);
    });
  }
  ngOnDestroy(): void {
    this.sottoscrizione.unsubscribe();
  }
}
//adesso guardando la console vediamo il nostro intervallo che è
//partito dalla dashboard, se ci spostiamo su un altra pagina come
//contatti noteremo però che l'intervallo continua. e questo non
//va bene dobbiamo stopparlo se non siamo più nella pagina richiesta
//pergestire al meglio subscribe e unsubscribe è meglio
//creare delle variabili. Ragionando quando dobbiamo stoppare il timer?
//quando cambiamo pagina quindi quando il componente non è più
//visualizzato quindi quando si distrugge quindi dobbiamo
//inserire il Ondestroy e al suo interno richiamiamo la nostra
//variabile.unsubscribe() in questo modo il timer verrà stoppato.
