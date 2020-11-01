<template>
    <div class="app">
        <ParserVideo />
        <ParsedList />

        <a
          href="https://github.com/maslaknikolai"
          target="_blank"
          class="author"
        >
          Made by maslaknikolai
        </a>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ParsedList from './components/ParsedList.vue';
import ParserVideo from './components/ParserVideo.vue';

export default defineComponent({
  components: {
    ParsedList,
    ParserVideo,
  },
});
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

a {
  color: #fff;
}

.app {
  background: #111;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
}

.author {
  position: fixed;
  user-select: none;
  z-index: 3;
  width: 100%;
  text-align: center;
  bottom: 0;
  right: 0;
  color: #fff;
  font-family: sans-serif;
  font-size: 10px;
}
</style>
