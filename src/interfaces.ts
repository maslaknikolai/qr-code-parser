export interface IParsedItem {
    uid: number,
    value: string,
    quantity: number,
    createdAt: string,
}

export type IParsedList = Array<IParsedItem>