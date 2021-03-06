export interface IParsedItem {
  uid: number;
  value: string;
  parsedAt: string[];
}

export type IParsedList = Array<IParsedItem>
