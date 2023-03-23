import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
//qui andremo ad utilizzare un nuovo decoratore @Input() al quale dobbiamo associare
// una variabile con il suo tipo, dopo aver fatto questo andiamo nel component padre app.component=>

//aggiungiamo l interfaccia onChanges in modo da salvare tutti i cambiamenti
@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.css'],
})
export class ProvaComponent implements OnInit, OnChanges {
  @Input() data: any;
  constructor() {}

  ngOnInit(): void {
    console.log(this.data);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
