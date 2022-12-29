import { Component } from '@angular/core';
import { IPersona } from '../negocio/ipersona';
import { ProvDatPersonasService } from '../servicios/prov-dat-persona.service'

@Component({
  selector: 'app-consulta-personas',
  templateUrl: './consulta-personas.component.html',
  styleUrls: ['./consulta-personas.component.css']

// Descomente la siguiente línea para que se genere una instancia distinta del servicio 
// por cada instancia nueva del componente:

//  ,providers: [ProvDatPersonasService]
})
export class ConsultaPersonasComponent {
  personas:IPersona[]=[];
  nInstanciaServicio:number=0;

  constructor(private provDatosInyectado: ProvDatPersonasService) { 
    this.personas = this.provDatosInyectado.getPersonas();
    this.nInstanciaServicio = this.provDatosInyectado.IdInstancia;
    // this.personas queda apuntando al arreglo declarado en el servicio !!
  }

  getNombreCompleto(persona:IPersona):string{
    return  persona.apPaterno + " " + persona.apMaterno + " " + persona.nombres;
  }

  eliminarPersona(personaI:IPersona){
    this.provDatosInyectado.eliminarPersona(personaI);
  }
}
