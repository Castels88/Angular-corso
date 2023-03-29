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
  //andiamo ad aggiungere il servizio di firebase in modo da impostare la get
  //nel onInit andiamo a dichiarare firebase.get(il nostro url )e non scordiamoci
  //il subscribe senno non parte
  constructor(private firebase: FirebaseService) {}
  ngOnInit(): void {
    // this.persone = this.servizioProva.getPersone();
    this.firebase
      .getPersone(
        'https://angular-corso-default-rtdb.europe-west1.firebasedatabase.app/.json'
      )
      .subscribe((data: any) => {
        console.log(data);
        this.persone = Object.keys(data).map((key) => {
          return data[key];
        });
        console.log(this.persone);
      });
  }
}
//c'è un errore perche angular non legge i dati che ci sono
//nei contatti e dice che ritorna un oggetto di oggetto
//in questi casi si deve fare il map degli oggetti
