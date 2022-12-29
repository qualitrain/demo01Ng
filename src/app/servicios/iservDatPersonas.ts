import { IPersona } from '../negocio/ipersona';
export interface IServDatPersonas {
    getPersonas():IPersona[];
    getPersona(id:number):IPersona|undefined;
    eliminarPersona(persona:IPersona): IPersona | undefined;
}