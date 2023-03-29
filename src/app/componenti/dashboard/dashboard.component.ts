import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { interval } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  homeform: FormGroup;
  constructor() {}
  //passo successivo è settare il nostro form nel ngOnInit
  //dentro onInit alla varibile associamo il comando new formGroup che sarà
  //un oggetto con tutti i controlli del nostro form
  //ad ogni input dobbiamo associare il new formControl('il valore o il type di valore')
  //adesso che lo abbiamo creato con i controlli dobbiamo
  //sincronizzare il file TS al file HTML andiamo nel HTML=>
  //per fare la validazione degli inpit si mette nel parametro del
  //formControl validators.required. in piu se la validazione deve avere
  //più caratteri di possiamo mettere dentro un array ad esempio
  //email che deve essere required e in piu il testo deve avere
  //la form adi un email si fa cosi
  //ultima cosa come possiamo mettre il bottone non cliccabile?
  //torniamo al html=>
  ngOnInit(): void {
    this.homeform = new FormGroup({
      nome: new FormControl(null, Validators.required),
      cognome: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      colore: new FormControl(),
    });
  }

  onSubmit() {
    console.log(this.homeform);
  }
}
