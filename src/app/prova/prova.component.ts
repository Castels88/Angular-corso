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
import { ServizioProvaService } from '../servizi/servizio-prova.service';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.css'],
})
export class ProvaComponent implements OnInit {
  //come prima cosa lo dobbiamo inserire nel constructor il nostro servizioProva e vedremo
  //che lo importerà in automatico.
  //dobbiamo anche definirlo come private senno non funziona e poi nel ngOnInit che avviarà
  //il componente mandiamo in console il nostro oggetto

  constructor(private servizioProva: ServizioProvaService) {}

  ngOnInit(): void {
    console.log('dal prova component', this.servizioProva.persone);
  }
}
