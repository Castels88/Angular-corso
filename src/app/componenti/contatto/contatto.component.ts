import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ServizioProvaService } from './../../servizi/servizio-prova.service';

@Component({
  selector: 'app-contatto',
  templateUrl: './contatto.component.html',
  styleUrls: ['./contatto.component.css'],
})
export class ContattoComponent implements OnInit {
  id: number;
  persona: any;
  constructor(
    private route: ActivatedRoute,
    private servizioProva: ServizioProvaService
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = +params.get('id');
      this.persona = this.servizioProva.getPersona(this.id);
    });
  }
}
