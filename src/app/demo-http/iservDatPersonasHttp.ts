import { IPersona } from '../negocio/ipersona';
import { Observable } from 'rxjs';
export interface IServDatPersonasHttp {
    getPersonas():Observable<IPersona[]>;
    getPersona(id:number):Observable<IPersona>;
}