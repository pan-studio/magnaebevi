import { Sezioni } from "./sezione.interface";

export interface Menu {

    id?: number,
    tipologia: string,
    dataCreazione?: string,
    dataModifica?: string,
    lingua: string,
    sezioni: Sezioni[]

}

