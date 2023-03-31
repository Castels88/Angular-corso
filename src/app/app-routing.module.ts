import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './componenti/about/about.component';
import { DashboardComponent } from './componenti/dashboard/dashboard.component';
import { ContattiComponent } from './componenti/contatti/contatti.component';
import { ContattoComponent } from './componenti/contatto/contatto.component';
import { NotfoundComponent } from './componenti/notfound/notfound.component';
import { AuthGuard } from './auth/auth.guard';
import { SignupComponent } from './componenti/signup/signup.component';
import { SigninComponent } from './componenti/signin/signin.component';

//andiamo ad aggiungere la nuova route
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },

  { path: 'about', component: AboutComponent },
  {
    path: 'contatti',
    component: ContattiComponent,
    canActivate: [AuthGuard],
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
