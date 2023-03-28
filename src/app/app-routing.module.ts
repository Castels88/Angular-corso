import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './componenti/about/about.component';
import { ContactComponent } from './componenti/contact/contact.component';
import { DashboardComponent } from './componenti/dashboard/dashboard.component';

//in quetsta const andiamo ad inserire il nostro path {}, ed il component che deve
//essere visualizzato, bene mettendo il path e il component continiamo a vedere
//tutti e 3 i componenti perchè? perchè non abbiamo definito
//nella app-html un div in cui inserire i nostri componenti parti della route
//questo div si chiama router-outlet andiamo nel app-component.html=>
//per creare altre routes bisogna solo ricreare il path e component
const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
