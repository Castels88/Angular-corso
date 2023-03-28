import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './componenti/about/about.component';
import { DashboardComponent } from './componenti/dashboard/dashboard.component';
import { ContattiComponent } from './componenti/contatti/contatti.component';
import { ContattoComponent } from './componenti/contatto/contatto.component';
import { NotfoundComponent } from './componenti/notfound/notfound.component';
//aggiungiamo il path per la pagina non trovata e anche il
//suo componente .
//per far capire ad angular di rendirizzare a questa pagina
//tutti i path non esistenti si mette nel path:'**',la word
//redirect to ed il path dove vogliamo che venga rendirizzato
//l'utente.
//poi c'è un altro metodo che gestisce le eventuale mancanza
//di path e in questo caso lo rimandiamo all homepage
//dove abbiamo messo il path '' vuoto aggiungiamo pathMatch:'full',
//redirect to il path che vogliamo
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'contatti',
    component: ContattiComponent,
    children: [{ path: ':id', component: ContattoComponent }],
  },
  { path: '404', component: NotfoundComponent },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
