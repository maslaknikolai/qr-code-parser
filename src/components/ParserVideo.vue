<template>
    <video
        class="video"
        ref="videoElem"
    />
</template>

<script lang="ts">
import QrScanner from 'qr-scanner'
import { defineComponent, onBeforeUnmount, onMounted, ref } from 'vue'
import parsedListStore from '../store/parsedList.store'

export default defineComponent({
    setup (props, { emit }) {
        const { createParsedItem } = parsedListStore

        function onParsed(parseResult: string) {
            createParsedItem({
                value: parseResult
            })
        }

        const videoElem = ref(null)
        function initQrScanner() {
            const scanner = new QrScanner(
                videoElem.value,
                onParsed
            );

            scanner.setInversionMode('both');
            scanner.start();

            onBeforeUnmount(scanner.destroy)
        }

        onMounted(initQrScanner)

        return {
            videoElem
        }
    }
})
</script>

<style scoped>
.video {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
}
</style>