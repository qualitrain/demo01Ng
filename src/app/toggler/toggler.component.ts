import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-toggler',
  templateUrl: './toggler.component.html',
  styleUrls: ['./toggler.component.css']
})
export class TogglerComponent implements OnInit{
  @Input()
  etiquetaUno:string="Uno";
  @Input()
  etiquetaDos:string="Dos";

  ngOnInit(): void {
  }

}
