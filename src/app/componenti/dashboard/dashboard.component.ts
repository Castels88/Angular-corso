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
  }

  onSubmit() {
    console.log(this.homeform);

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
  //andiamo a creare la ondelete che funzionerà sul button creato

  onDeletePersona() {
    this.firebase
      .deletePersona(
        'https://angular-corso-default-rtdb.europe-west1.firebasedatabase.app/',
        '-NRhc6ldKizR7OlZkMEo'
      )
      .subscribe((data) => {
        console.log(data);
      });
  }
}
