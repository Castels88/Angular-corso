//cosa dobbiamo inserire in questa classe user ?
//noi sappiamo che ci arriva un oggetto dall inserimento
//dei dati che sono: email un id  token e un expiration token
export class User {
  constructor(
    public email: string,
    public id: string,
    private _token: string,
    private _expirationDate: Date
  ) {}
  //adesso avendo il token e l expiration private dobbiamo usare dei
  //metodi di TS per farsi di poter prendere questi 2 elementi .
  //in this si usa il metodo get ed essendo privati entrambi
  //dobbiamo mettere un _ davanti agli elementi

  get token() {
    //all interno dobbiamo fare un verifica in cui
    //diciamo che se l expiration e la nuova data sono > dell expiration
    //non deve fare nulla
    if (!this._expirationDate || new Date() > this._expirationDate) {
      return null;
    }
    return this._token;
  }
  //adesso dobbiamo andare a creare l user nel servizio =>
}
