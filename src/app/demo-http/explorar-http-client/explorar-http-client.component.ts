import { Component } from '@angular/core';
import { IPerro } from 'src/app/negocio/iperro';
import { ProvDatPerrosService } from '../prov-dat-perros.service';
import { IErrorApiPerrera } from '../ierrorApiPerrera';

@Component({
  selector: 'app-explorar-http-client',
  templateUrl: './explorar-http-client.component.html',
  styleUrls: ['./explorar-http-client.component.css']
})
export class ExplorarHttpClientComponent {
  modoDebugOn:boolean=true;
  perris:IPerro|null={
    id:0,
    nombre:'',
    raza:'',
    edad:0
  };
  nomHeaders:string[]=[];
  valHeaders:string[]=[];

  hayError:boolean=false;
  errorApi:IErrorApiPerrera|undefined;

  constructor(private lector:ProvDatPerrosService){}

  leerPerro(){
    this.hayError = false;

    this.lector.getPerro(1).subscribe( resp => {
      this.perris = resp.body;
      this.nomHeaders = resp.headers.keys();
      for(let i=0; i<this.nomHeaders.length; i++ ){
        let valHeaderI = resp.headers.get(this.nomHeaders[i]);
        this.valHeaders[i] = valHeaderI ? valHeaderI : '';
      }
    })
  }
  leerPerroPlus(){
    this.hayError = false;

    this.lector.getPerroPlus(2).subscribe( {
      next: perro => {
        this.perris = perro;
      },
      error: err => {
        this.hayError = true;
        console.log(err);
        this.errorApi = err;
      }
    }
)
  }

  leerPerroErroneo(){
    this.hayError = false;

    this.lector.testGetPerroErroneo().subscribe( {
      next:resp => {
        this.perris = resp.body;
      },
      error: err => {
        this.hayError = true;
        console.log(err);
        this.errorApi = err;
      }
    } );

  }
}
