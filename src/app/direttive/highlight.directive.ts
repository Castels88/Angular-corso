import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @Input() appHighlight = '';
  constructor(private element: ElementRef) {}

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
