import { Directive, ElementRef, HostListener, Input } from '@angular/core';
//una volta creata la direttiva dobbiamo sempre far
//riferimento ad un elemento quando creiamo una direttiva
//quindi dobbiamo specificarlo nel constructor
//di solito le direttive vengono usate per modificare il css
//o poter gestire diversamente in questo caso dopo aver
//dichiarato il nativeElement.style.la proprieta css
//va scritta in camelCase come in JS inline
@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  //passiamo a qualcosa di piu complicato
  //come possiamo passare i dati da dentro la direttiva
  //a fuori. con @input molto importante il nome della
  //input deve essere lo stesso del selector della direttiva
  @Input() appHighlight = '';
  constructor(private element: ElementRef) {}
  //il metodo che ci serve e' l'hostListener
  //al quale interno ('vanno messe le azioni di ascolto
  //secondo la scrittura in JS) e poi vanno associate
  //le funzioni che vogliamo vengano eseguite
  //best practice dice che e sempre meglio usare
  // per la gestione di questi eventi quindi andiamo
  // a creare la funzione cambia colore e gli
  //associamo i 2 movimenti
  @HostListener('mouseenter') onMouseEnter() {
    this.cambiaColore(this.appHighlight);
    this.upperCase('bold');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.cambiaColore('red');
    this.upperCase('normal');
  }
  cambiaColore(colore: string) {
    this.element.nativeElement.style.backgroundColor = colore;
  }

  upperCase(font: string) {
    this.element.nativeElement.style.fontWeight = font;
  }
}
