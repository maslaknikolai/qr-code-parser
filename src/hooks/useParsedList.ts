import { ref } from 'vue';
import parsedListRepository from '@/repositories/parsedList';
import { IParsedItem, IParsedList } from '../interfaces';

export default function useParsedList() {
  const parsedList = ref([] as IParsedList);

  parsedListRepository.all()
    .then((savedList) => {
      parsedList.value = savedList;
    });

  function saveList() {
    parsedListRepository.saveAll(parsedList.value);
  }

  function createParsedItem(value: string) {
    const existingParsedItem = parsedList.value.find(
      (parsedItem) => parsedItem.value === value,
    );

    const parsedAt = String(
      new Date().valueOf(),
    );

    if (existingParsedItem) {
      // TODO check
      existingParsedItem.parsedAt.unshift(
        parsedAt,
      );
    } else {
      parsedList.value.push({
        uid: Math.random(),
        value,
        parsedAt: [
          parsedAt,
        ],
      });
    }

    saveList();
  }

  function removeParsedItem(parsedItem: IParsedItem) {
    const index = parsedList.value.indexOf(parsedItem);
    parsedList.value.splice(index, 1);

    saveList();
  }

  return {
    parsedList,
    createParsedItem,
    removeParsedItem,
  };
}
