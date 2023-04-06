import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { IComponente } from 'src/app/servicios/IComponente';
import { ProvDatComponentesMockService } from 'src/app/servicios/prov-dat-componentes-mock.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit{
  objDemo:IComponente={demo:"", titulo:"", descripcion:""};

  constructor(private provDatos:ProvDatComponentesMockService,
              private ruteador:Router,
              private rutaActiva:ActivatedRoute){}

  ngOnInit(): void {
    console.log("editor.ngOnInit()")
    this.rutaActiva.paramMap.pipe(
      switchMap(paramI => this.provDatos.getComponente(paramI.get("id")!))
    ).subscribe( 
           (objDemoI:IComponente) => {
              if(objDemoI === null){
                this.objDemo={demo:"", titulo:"", descripcion:""};
              }
              else{
                this.objDemo.demo = objDemoI.demo;
                this.objDemo.titulo = objDemoI.titulo;
                this.objDemo.descripcion = objDemoI.descripcion;
              }           
          })
  }
  irAlistaDemos(){
    this.ruteador.navigate(['testRxjs','basicos']);
  }
  actualizarCambios(){
    this.provDatos.updateComponente(this.objDemo);
    this.irAlistaDemos();
  }
}
