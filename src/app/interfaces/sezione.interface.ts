import { Item } from "./item.interface";

export interface Sezioni {
    id?: number,
    label: string,
    items: Item[]
}