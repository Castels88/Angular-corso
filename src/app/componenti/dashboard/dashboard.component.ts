import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { interval } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  //possiamo richiamare il form anche da TS con il ViewChild
  //al quale associamo la nostra variabile
  @ViewChild('homeform') homeform: NgForm;
  //in questo modo e richiamando homeform nel console.log
  //manderò in console in nostro form
  constructor() {}
  ngOnInit(): void {}
  ngOnDestroy(): void {}
  //in questo metodo dobbiamo assegnare il valore che abbiamo messo
  //nella funzione onSubmit e per essere precisi gli diamo direttamente
  //il type ngForm
  onSubmit(form: NgForm) {
    console.log(form);
  }
}
