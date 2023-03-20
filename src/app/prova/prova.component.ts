import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnDestroy,
  OnInit,
} from '@angular/core';
//adesso andiamo a vedere il ciclo di vita dei componenti
//il primo step di vita del componente lo possiamo definire col ng OnInit{}
//successivamente ngDoCheck{} che fara un controllo del componente appena creato
//poi viene inizializzato il contenuto del componente
//poi si ha il check del contenuto che e' stato inizializzato
//succesivamente si ha un controllo della view della pagina
//il componete dopo questi controlli rimane li fino a quando non lo distruggiamo
// o decidiamo di cambiare la pagina
@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.css'],
})
//andiamo ad implementare tutti i cicli di vita del componente
//ci dara un errore perche dobbiamo implementarli nel TS
export class ProvaComponent
  implements
    OnInit,
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    DoCheck,
    OnDestroy
{
  constructor() {
    console.log('costruttore');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit.');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
  ngOnInit(): void {
    console.log('onInit');
  }
}
