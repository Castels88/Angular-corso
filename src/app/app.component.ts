import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ServizioProvaService } from './servizi/servizio-prova.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Angular-corso';
  oggi = Date.now();
  constructor(private servizioProva: ServizioProvaService) {}
  ngOnInit(): void {
    console.log('dall app component', this.servizioProva.persone);
  }
}
