import { Credenziali } from "./credenziali.interface";

export interface User {
    id?:number,
    nome:string,
    cognome:string,
    email:string,
    loyalty:number,
    credenziali: Credenziali,
    couponCode? : string
}

