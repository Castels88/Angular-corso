import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/servizi/firebase.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  homeform: FormGroup;
  constructor(private firebase: FirebaseService) {}

  ngOnInit(): void {
    this.homeform = new FormGroup({
      nome: new FormControl(null, Validators.required),
      cognome: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      colore: new FormControl(),
    });
    //dopo che abbiamo inserito il nostro servizio firebase
    //andiamo a dichiararlo con la funzione e dentro la funzione
    //passiamo l url di firebase.json molto importante perchè firebase
    //lo richiedo ed il body ossia cosa vogliamo inviare e infine
    //per far si che i dati vengano inviati dobbiamo mettere il subscribe
  }

  onSubmit() {
    console.log(this.homeform);
    //vediamo come mandare i dati del form quindi nel body della chiamata
    //vado a mettere
    this.firebase
      .insertPersona(
        'https://angular-corso-default-rtdb.europe-west1.firebasedatabase.app/.json',
        {
          nome: this.homeform.value.nome,
          cognome: this.homeform.value.cognome,
          email: this.homeform.value.email,
          colore: this.homeform.value.colore,
        }
      )
      .subscribe((data) => {
        console.log(data);
      });
  }
}
