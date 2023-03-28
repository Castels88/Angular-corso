import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './componenti/about/about.component';
import { DashboardComponent } from './componenti/dashboard/dashboard.component';
import { ContattiComponent } from './componenti/contatti/contatti.component';

//al path mettendo /: posso aggiungere il parametro che
//che mi serve. in questo modo se vado nell URL
//mi prenderà il dato ma al momento non ritorna nulla
//perche dobbiamo attivarlo con activatedRoute
//andiamo nel contatti.ts=>
const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contatti', component: ContattiComponent },
  { path: 'contatti/:id', component: ContattiComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
