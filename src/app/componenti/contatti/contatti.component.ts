import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServizioProvaService } from './../../servizi/servizio-prova.service';
import { FirebaseService } from 'src/app/servizi/firebase.service';

@Component({
  selector: 'app-contatti',
  templateUrl: './contatti.component.html',
  styleUrls: ['./contatti.component.css'],
})
export class ContattiComponent implements OnInit {
  persone: any;
  persona: any;

  constructor(private firebase: FirebaseService) {}
  ngOnInit(): void {
    this.firebase
      .getPersone(
        'https://angular-corso-default-rtdb.europe-west1.firebasedatabase.app/.json'
      )
      .subscribe((data: any) => {
        console.log(data);
        this.persone = Object.keys(data).map((key) => {
          data[key]['id'] = key;
          return data[key];
        });
        console.log(this.persone);
      });
  }
}
