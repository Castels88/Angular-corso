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

  isVisible = true;
  isVisible2 = false;
}
