import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  constructor(private authService: AuthService) {}
  ngOnInit(): void {}
  //qui dobbiamo implementare il signIn che che deve essere anche implementato
  //nel ath.servizio =>
  //una volta implementato il servizio basta richiamarlo nel authServizio
  //ed il gioco sara fatto e ci andra a loggare in console
  //vediamo di fare unaltra cosa
  //la nostra app dovra avere degli user ma questi user dove li
  //salviamo nel localStorage . quindi dobbiamo andare creare
  //una classe user in cui verranno buttati i dati della nostra registrazione
  //e del nostro login .
  onSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signIn(email, password).subscribe((data: any) => {
      console.log(data);
      //dobbiamo far si che i dati vengano salvati nel localStorage
      //cosa mettiamo nel localStorage? i dati che ritornano in console dopo il login
      //in più dobbiamo convertire l expiration date che è in secondi
      const expirationDate = new Date(
        new Date().getTime() + data.expiresIn * 1000
      );
      this.authService.createUser(
        data.email,
        data.localId,
        data.idToken,
        expirationDate
      );

      //qui ci dava un errore perche this.authService.user non poteva stare un oggetto in una
      //stringa e allora abbiamo dovuto usare lo stringify
      localStorage.setItem('user', JSON.stringify(this.authService.user));
      console.log(this.authService.user);
    });
    form.reset();
  }
}
