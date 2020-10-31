import QrScanner from 'qr-scanner'

const videoElem = document.querySelector('.video')
const parsedListElem = document.querySelector('.parsed-list')

const qrScanner = new QrScanner(
    videoElem,
    (result) => {
        const parsedItemElem = document.createElement('div')
        parsedItemElem.className = 'parsed-item'
        parsedItemElem.innerText = result

        parsedListElem.prepend(parsedItemElem)
    },
);

qrScanner.setInversionMode('both');
qrScanner.start();