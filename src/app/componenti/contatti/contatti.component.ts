import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServizioProvaService } from './../../servizi/servizio-prova.service';

@Component({
  selector: 'app-contatti',
  templateUrl: './contatti.component.html',
  styleUrls: ['./contatti.component.css'],
})
//andiamo ad implementare il servizio nel componente
//qui nel constructor dobbiamo attivare la nostra route
//ora implementiamo ngOnInit richiamando la route.snapshot'che fa uno screeshot del
//nostro dato'.paraMap'che salva il nostro parametro'.get'raccoglie il nostro paramentro(il
//nome del parametro che vogliamo venga preso)'
export class ContattiComponent implements OnInit {
  persone: any;
  persona: any;
  isProfile: boolean = false;
  constructor(
    private servizioProva: ServizioProvaService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    if (this.route.snapshot.paramMap.get('id')) {
      this.isProfile = true;
      this.persona = this.servizioProva.getPersona(
        parseInt(this.route.snapshot.paramMap.get('id')!)
      );
    } else {
      this.isProfile = false;
      this.persone = this.servizioProva.getPersone();
    }
  }
}
