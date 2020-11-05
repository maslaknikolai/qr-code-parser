import { IParsedList } from '@/interfaces';

const parsedListRepository = {
  async all(): Promise<IParsedList> {
    return JSON.parse(localStorage.getItem('parsedList') || '');
  },

  async saveAll(parsedList: IParsedList) {
    localStorage.setItem('parsedList', JSON.stringify(parsedList));
  },
};

export default parsedListRepository;
