import { Component } from '@angular/core';
import { DigimonService } from './service/digimon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public digimones:any;

  constructor(private _digimonService: DigimonService){}

  ngOnInit()
  {
    this._digimonService.listaDigimones().subscribe
    (
      (respuesta) => {this.digimones = respuesta; console.log(respuesta)},
       (e) => {console.error(e)}
    )
  }
}
