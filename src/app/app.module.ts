import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProvaComponent } from './prova/prova.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

//come prima cosa andiamo ad implementare il componente di material all'interno della app.module
//e poi dobbiamo aggiungere il componente anche negli import
//adesso prendiamo l esempio di html che abbiamo nella pagina dei material design e andiamo nel html di prova =>
@NgModule({
  declarations: [AppComponent, ProvaComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
