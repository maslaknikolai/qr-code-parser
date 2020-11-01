import { ref } from 'vue'
import { IParsedItem, IParsedList } from '../interfaces'

function getCurrentDate() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = "0" + date.getMinutes();
    const seconds = "0" + date.getSeconds();

    return hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
}

export default function useParsedList() {
    const savedList: IParsedList = localStorage.getItem('parsed')
        ? JSON.parse(localStorage.getItem('parsed'))
        : []

    const parsedList = ref(savedList)

    function saveList() {
        localStorage.setItem('parsed', JSON.stringify(parsedList.value))
    }

    function createParsedItem(data: {
        uid?: string | number,
        value?: string,
        createdAt?: string
    }) {
        parsedList.value.unshift({
            uid: data.uid ? data.uid : Math.random(),
            createdAt: data.createdAt ? data.createdAt : getCurrentDate(),

            value: data.value,
        } as IParsedItem)

        saveList()
    }

    function removeParsedItem(parsedItem: IParsedItem) {
        const index = parsedList.value.indexOf(parsedItem)
        parsedList.value.splice(index, 1)

        saveList()
    }

    return {
        parsedList,
        createParsedItem,
        removeParsedItem
    }
}