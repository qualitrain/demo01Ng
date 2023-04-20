import { Component, Input } from '@angular/core';
import { OnInit, OnChanges, DoCheck, SimpleChanges, AfterContentInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { IParamsAviso } from './IParamsAviso';

@Component({
  selector: 'app-despl-error',
  templateUrl: './despl-error.component.html',
  styleUrls: ['./despl-error.component.css']
})
export class DesplErrorComponent 
          implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterViewChecked, 
                     OnDestroy {
  avisoConfirmado:boolean;
  avisoLeido:boolean;

  @Input()
  params:IParamsAviso={
    tipo : '',
    descripcion: '',
    sugerencia: ''
  };
  
  constructor() {
    this.avisoLeido = false;
    this.avisoConfirmado = false;
  }
  ngOnChanges(changes:SimpleChanges): void {
//    console.log("despl-error.ngOnChanges()")
  }
  
  ngOnInit(): void {
    if(this.params === undefined){
      this.params = {
        tipo : 'Error',
        descripcion: 'Aquí va la descripción',
        sugerencia: 'Aquí va la sugerencia'
      }
    }
    else
    if(this.params.descripcion === undefined)
      this.params.descripcion = "";
    else
    if(this.params.sugerencia === undefined)
      this.params.sugerencia = "";
    else
    if(this.params.tipo === undefined)
      this.params.tipo = "Aviso";
  }
  ngDoCheck(): void {
//    console.log("despl-error.ngDoCheck()")
    if(this.avisoConfirmado == false)
        return;
    //aviso ya confirmado: el usuario hizo click en boton de ok
    if(this.avisoLeido){ //Ya despareció la vista en al iteración anterior
      this.avisoConfirmado = false;
      this.avisoLeido = false;
    }
    else // Aún no se ha actualizado la vista, el aviso no ha desaparecido aún
      this.avisoLeido = true;
  }

  ngAfterContentInit(): void {
//    console.log("despl-error.ngAfterContentInit()")
  }
  ngAfterViewChecked(): void {
//    console.log("despl-error.ngAfterViewChecked()")
  }
  ngOnDestroy(): void {
//    console.log("despl-error.ngOnDestroy()")
  }

  atenderOK():void{
//    console.log("atenderOK()");
    this.avisoConfirmado = true;
  }
}
