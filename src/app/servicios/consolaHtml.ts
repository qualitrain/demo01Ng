import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
export class ConsolaHtml{
    elemHost:HTMLElement|undefined;
    colorResaltado:string="yellow";

    constructor(){ }

    setElemHost(hostConsola:HTMLElement){
        this.elemHost = hostConsola;
    }
    setColorResaltado(color:string){
        this.colorResaltado = color;
    }

    desplegarEn(cad:string, elemHtml:HTMLElement){
        //    console.log("desplegar(" + cad + ")");
        //    console.log(elemHtml);
            if(!elemHtml){
              console.error("Elemento Html host no existe");
              throw new Error("Elemento Html host no existe");
            }
            cad.replaceAll("\t","&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;")
            let contenidoDiv:string = elemHtml!.innerHTML === undefined ? ""! 
                                              : elemHtml?.innerHTML!;
            contenidoDiv += cad + "<br>";
            elemHtml.innerHTML = contenidoDiv;
    }
    limpiarElem(elemHtml:HTMLElement){
        if(!elemHtml){
            console.error("Elemento Html host no existe");
            throw new Error("Elemento Html host no existe");
        }
        elemHtml.innerHTML="";
    }
    desplegar(cad:string){
        if(!this.elemHost){
            console.error("Elemento Html host no existe");
            throw new Error("Elemento Html host no existe");
        }
        cad = cad.replaceAll("\t","&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;")

        let contenidoDiv:string = this.elemHost!.innerHTML === undefined ? ""! 
                                            : this.elemHost?.innerHTML!;
        contenidoDiv += cad + "<br>";
        this.elemHost.innerHTML = contenidoDiv;
    }
    limpiar(){
        if(!this.elemHost){
            console.error("Elemento Html host no existe");
            throw new Error("Elemento Html host no existe");
        }
        this.elemHost.innerHTML="";
    }
    writeln(cad:string){
        this.desplegar(cad);
    }
    write(cad:string){
        if(!this.elemHost){
            console.error("Elemento Html host no existe");
            throw new Error("Elemento Html host no existe");
        }
        cad = cad.replaceAll("\t","&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;")

        let contenidoDiv:string = this.elemHost!.innerHTML === undefined ? ""! 
                                            : this.elemHost?.innerHTML!;
        contenidoDiv += cad + "&nbsp;";
        this.elemHost.innerHTML = contenidoDiv;
    }
    resaltar(cad:string, color:string|undefined=undefined){
        if(!this.elemHost){
            console.error("Elemento Html host no existe");
            throw new Error("Elemento Html host no existe");
        }
        cad = cad.replaceAll("\t","&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;")
        if(color === undefined)
            this.elemHost.appendChild(this.crearElemResaltado(cad));
        else
            this.elemHost.appendChild(this.crearElemResaltado(cad,color));

    }
    crearElemResaltado(cadResaltada:string, color:string|undefined=undefined):HTMLElement{
        let elemResaltado:HTMLElement = document.createElement("STRONG");
        if(color === undefined)
            elemResaltado.style.color=this.colorResaltado;
        else
            elemResaltado.style.color=color;

        elemResaltado.innerText=cadResaltada;
        return elemResaltado;
    }
       
}