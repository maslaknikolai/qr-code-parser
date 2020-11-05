import { IParsedList } from '@/interfaces';
import {
  IParsedItem as IPreviousParsedItem,
  IParsedList as IPreviousParsedList,
} from '../initialMigration/interfaces';

export default function initialMigration() {
  const savedParsedList: IPreviousParsedList = JSON.parse(localStorage.getItem('parsedList') || '');

  const migratedParsedList: IParsedList = savedParsedList.map((savedParsedItem: IPreviousParsedItem) => ({
    uid: savedParsedItem.uid,
    value: savedParsedItem.value,
    parsedAt: [
      String(savedParsedItem.createdAt),
    ],
  }));

  localStorage.setItem('parsedList', JSON.stringify(migratedParsedList));
}
