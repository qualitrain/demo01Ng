import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-avisador',
  templateUrl: './avisador.component.html',
  styleUrls: ['./avisador.component.css']
})
export class AvisadorComponent implements OnInit{
  mensaje?:string='';
  sugerencia:string='';

  constructor(private ruta:ActivatedRoute, 
              private ruteador:Router){}

  ngOnInit(): void {
    this.ruta.queryParamMap.subscribe(mapa => {
      let paramMsj = mapa.get("msj");
      let paramCmd = mapa.get("cmd");
      this.mensaje = paramMsj ? paramMsj : "";
      this.sugerencia = paramCmd ? "Intente lo siguiente: " + paramCmd : "";
    })
  }
  irAraiz(){
    this.ruteador.navigate([ 'testRxjs', { outlets: { outAvisos: null } } ]);
    this.ruteador.navigate(['testRxjs']);
  }
}
