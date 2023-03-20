import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular-corso';
  //creiamo la funzione e buttiamoci dentro
  //quello che vogliamo
  onClick(e: any) {
    console.log(e);
  }
  //qui invece di eny il tipe corretto sarebbe Event e chiaramente dobbiamo
  //targhettizare l input e.target.value ma TS ci da un errore perche TS non sa cosa
  // e' un input allora qui e' necessario fare il casting
  //ossia far capire a TS che e' un elemento HTML e si fa cosi
  // dentro il console.log((<HTMLInputElement>e.targe).value) le doppie (vanno ad indicare)
  //che e un elemento HTML

  onInput(e: Event) {
    console.log((<HTMLInputElement>e.target).value);
  }
}
