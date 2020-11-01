<template>
    <div class="app">
        <ParserVideo />
        <ParsedList />
    </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount, onMounted, ref } from 'vue'
import ParsedList from './components/ParsedList.vue'
import ParserVideo from './components/ParserVideo.vue'

export default defineComponent({
    components: {
        ParsedList,
        ParserVideo
    }
})
</script>

<style lang="scss">
* {
    box-sizing: border-box;
}

html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
}

.app {
    background: #111;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: relative;
}
</style>