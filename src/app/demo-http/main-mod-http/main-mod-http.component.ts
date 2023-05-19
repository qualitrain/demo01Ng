import { Component } from '@angular/core';

@Component({
  selector: 'app-main-mod-http',
  templateUrl: './main-mod-http.component.html',
  styleUrls: ['./main-mod-http.component.css']
})
export class MainModHttpComponent {
  arquitecturaHttpClientBasicaOn:boolean = false;
  ejmGetPersonaOn:boolean=true;
  ejmGetPersonasOn:boolean=true;

  getDetalladoYmanejoErroresOn:boolean = true;

}
