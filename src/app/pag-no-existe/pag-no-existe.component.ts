import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';

@Component({
  selector: 'app-pag-no-existe',
  templateUrl: './pag-no-existe.component.html',
  styleUrls: ['./pag-no-existe.component.css']
})
export class PagNoExisteComponent implements OnInit{

  rutaNoSoportada:string="";

  constructor(private rutaActiva:ActivatedRoute, 
              private ruteador:Router)
  {}

  ngOnInit(): void {
    this.rutaActiva.url.subscribe( frag => this.procesarUrl(frag))
  }

  procesarUrl(fragsUrl:UrlSegment[]){
    this.rutaNoSoportada = "/" + fragsUrl.map(frI => frI.path)
                                         .join("/");
  }

  irAlaRaiz(){
    this.ruteador.navigate(['/']);
  }
}
