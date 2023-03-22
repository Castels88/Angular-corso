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

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.css'],
})
export class ProvaComponent implements OnInit {
  isDisabled = false;
  immagine2 = 'https://material.angular.io/assets/img/examples/shiba2.jpg';
  cane = [
    {
      nome: 'Roger',
      razza: 'Golden',
      descrizione: `The Golden is the smallest of the six original and distinct spitz breeds of dog
    from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
    originally bred for hunting.`,
    },
  ];
  constructor() {
    console.log('costruttore');
  }

  ngOnInit(): void {
    console.log('onInit');

    setInterval(() => {
      this.isDisabled = !this.isDisabled;
    }, 2000);
  }
}
