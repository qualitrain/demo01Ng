import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from '../autenticacion.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  estado:string="";

  constructor(private servAutenticacion:AutenticacionService,
              private ruteador:Router){
    if(this.servAutenticacion.yaAutenticado())
        this.estado = "Autenticado";
    else 
        this.estado = "No autenticado";
  }

  terminarSesion(){
    if(this.servAutenticacion.yaAutenticado()){
      this.servAutenticacion.terminarSesion();
      this.estado="No autenticado";
    }
      
    this.ruteador.navigate(['/']);
  }

}
