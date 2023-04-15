import { inject} from '@angular/core';
import { CanActivateChildFn, CanActivateFn, CanMatchFn, Router, UrlTree } from '@angular/router';
import { AutenticacionService } from './autenticacion.service';

export const fnGrdAutenticacionRuta:CanActivateFn =
() => {
   const autenticador = inject(AutenticacionService);
   const ruteador = inject(Router);
   return validarOenrutarSiAutenticado(autenticador,ruteador);
}

export const fnGrdAutenticacionRutaHijos:CanActivateChildFn =
() => {
   const autenticador = inject(AutenticacionService);
   const ruteador = inject(Router);
   return validarOenrutarSiAutenticado(autenticador,ruteador);
}

export const fnGrdAutenticacionRutaLazy:CanMatchFn = 
() => {
  const autenticador = inject(AutenticacionService);
  const ruteador = inject(Router);
  return validarOenrutarSiAutenticado(autenticador,ruteador);
}

const validarOenrutarSiAutenticado = 
(autenticador:AutenticacionService, ruteador:Router):boolean | UrlTree => {
      if(autenticador.yaAutenticado())
        return true;
      else
        return ruteador.parseUrl('/login');
};
