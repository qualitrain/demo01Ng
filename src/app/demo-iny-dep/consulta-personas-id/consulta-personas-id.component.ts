import { Component } from '@angular/core';
import { IPersona } from 'src/app/negocio/ipersona';
import { ProvDatPersonasService } from 'src/app/servicios/prov-dat-persona.service';

@Component({
  selector: 'app-consulta-personas-id',
  templateUrl: './consulta-personas-id.component.html',
  styleUrls: ['./consulta-personas-id.component.css']

// Descomente la siguiente línea para que se genere una instancia distinta del servicio 
// por cada instancia nueva del componente:

//  ,providers: [ProvDatPersonasService]
})
export class ConsultaPersonasIDComponent {
  personas:IPersona[]=[];
  nInstanciaServicio:number=0;

  constructor(private provDatosInyectado: ProvDatPersonasService) { 
    this.personas = this.provDatosInyectado.getPersonas();
    this.nInstanciaServicio = this.provDatosInyectado.IdInstancia;
    console.log("ConsultaPersonasIDComponent.contructor()");
    // this.personas queda apuntando al arreglo declarado en el servicio !!
  }

  getNombreCompleto(persona:IPersona):string{
    return  persona.apPaterno + " " + persona.apMaterno + " " + persona.nombres;
  }

  eliminarPersona(personaI:IPersona){
    this.provDatosInyectado.eliminarPersona(personaI);
  }
}
