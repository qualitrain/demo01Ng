import { InjectionToken} from '@angular/core';
export const PARAMS_CIA = new InjectionToken<object>('Parametros Empresa',
                  { providedIn:"root", 
                   factory: () => {
                         return { nombre:"Qualitrain Express",
                                  razonSocial:"Qtx de Mexico SA de CV",
                                  rutaLogo:"./assets/img/LogoCuadrado.png"} ; 
                        } 
                 });