import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.css'],
})
export class ProvaComponent implements OnInit, OnChanges {
  constructor() {}
  //vedremo in questa lezione come passare dati da un figlio ad un padre .
  //in questo caso dovremmo renderizzare la variabile nome in app.component.html
  //l unico modo per fare cio e creare un event-binding ()='' che sara creato da noi
  //per fare cio se prima usavamo @input per far entrare dati nel figlio
  //adesso per fare uscire dati dal figlio si usa @output()ilNomeDellEvento=new EventEmitter'
  //qui dobbiamo tipizzare'(); una volta scritto il nostro evento
  //creiamo la funzione che mandera il dato fondametale mettere il .emit
  //ci possiamo muovere sul prova.html=>
  @Output() mandaDatiEvento = new EventEmitter<string>();
  nome = 'luca';
  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  mandaDati() {
    this.mandaDatiEvento.emit(this.nome);
  }
}
