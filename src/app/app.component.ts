import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { ServizioProvaService } from './servizi/servizio-prova.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Angular-corso';
  numero = 5;
  oggi = Date.now();

  constructor(private servizioProva: ServizioProvaService) {}
  //gli observator sono degli eventi che possiamo stanziare all'interno
  //del ts dei nostri componenti, la cosa importante di questi
  //observable è che devono essere sottoscritto col metodo subscribe
  //proviamo a creare un evento della durata di 1 sec
  //in questo caso useremo il metodo interval
  ngOnInit(): void {
    // interval(1000).subscribe((numero) => {
    //   console.log(numero);
    // });
    //proviamo a creare un nuovo observable da zero
    new Observable((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        count++;
      }, 1000);
    }).subscribe((numero) => {
      console.log('dalla app', numero);
    });
  }
}
//esiste anche il metodo unsubscribe ma per farlo vedere meglio
//è megliosvilupparlo in un componente diverso andiamo nella
//dashboard=>
