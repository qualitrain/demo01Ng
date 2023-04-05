import { Component } from '@angular/core';
import { IComponente } from 'src/app/servicios/IComponente';
import { ProvDatComponentesMockService } from 'src/app/servicios/prov-dat-componentes-mock.service';
@Component({
  selector: 'app-lista-demos-basicos',
  templateUrl: './lista-demos-basicos.component.html',
  styleUrls: ['./lista-demos-basicos.component.css']
})
export class ListaDemosBasicosComponent {
  listaComponentes:IComponente[]=[];

  constructor(private provDatos:ProvDatComponentesMockService){
    this.provDatos.getComponentesTodos()
                  .subscribe(datos => this.listaComponentes = datos);
  }
}