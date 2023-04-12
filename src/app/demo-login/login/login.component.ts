import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from '../autenticacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  estado:string="";
  constructor(private servAutenticacion:AutenticacionService,
              private ruteador:Router){
  }
  ngOnInit(): void {
    console.log("AutenticacionService.yaAutenticado():" + this.servAutenticacion.yaAutenticado());
    if(this.servAutenticacion.yaAutenticado())
        this.estado = "Autenticado";
    else 
        this.estado = "No autenticado";
  }

  autenticar(){
    if(this.servAutenticacion.yaAutenticado() === false){
      this.servAutenticacion.crearSesion();
      console.log("AutenticacionService.yaAutenticado():" + this.servAutenticacion.yaAutenticado());
      this.estado="Autenticado";
    }
      
    this.ruteador.navigate(['/']);
  }

}
