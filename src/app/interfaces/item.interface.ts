import { Sconto } from "./sconto.interfaces";

export interface Item {
    id?:number;
    nome: string;
    descrizione: string;
    prezzo: number;
    disponibile: boolean;
    sconto : Sconto;
    idSezione?: number;
    idMenu?: number;
    idSconto?: number
}