<template>
  <div class="app">
    <ParserVideo />
    <ParsedList />

    <Author />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ParsedList from './components/ParsedList.vue';
import ParserVideo from './components/ParserVideo.vue';
import Author from './components/Author.vue';

export default defineComponent({
  components: {
    ParsedList,
    ParserVideo,
    Author,
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
</style>
