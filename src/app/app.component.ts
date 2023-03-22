import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular-corso';

  onClick(e: Event) {
    this.title = 'ho cliccato sul bottone';
  }

  onInput(e: Event) {
    this.title = (<HTMLInputElement>e.target).value;
  }
}
