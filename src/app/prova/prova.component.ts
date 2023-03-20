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
  //creaiamo la variabile col valore opposto di quelo di partenza che abbiamo
  //come possiamo legare questa variabile nel file HTML andiamo nel file HTML=>
  isDisabled = false;
  immagine = '';
  immagine1 =
    'https://t4.ftcdn.net/jpg/05/21/18/03/360_F_521180377_2iAVJqBQSo3cgKaVp8vMBR8asrC61DoU.jpg';
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
    //andiamo ad impostare un setInterval
    //che cambia il valore della variabile isDisabled ogni 2 sec
    setInterval(() => {
      this.isDisabled = !this.isDisabled;
    }, 2000);
    //creaimo una variabile counter in modo che se il numero e pari
    //renderizza una immagine se e dispari un altra
    //vedremo che ogni secondo Angular andra a modificare l'immagine
    let counter = 0;
    setInterval(() => {
      if (counter % 2 == 0) {
        this.immagine = this.immagine1;
      } else {
        this.immagine = this.immagine2;
      }
      counter++;
    }, 1000);
  }
  //noteremo che adesso il bottone cambia ogni 2 secondi la
  //sua proprieta
}
