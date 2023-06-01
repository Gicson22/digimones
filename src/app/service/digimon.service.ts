import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DigimonService {

  private urlApi : string;

  constructor( private _http : HttpClient ) {
    this.urlApi = "https://digimon-api.vercel.app/api/digimon";
  }

  public listaDigimones(): Observable <any>{
    return this._http.get<any>(this.urlApi);
  }

}
