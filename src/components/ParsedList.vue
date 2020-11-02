<template>
  <div class="parsed-list">
    <ParsedItem
      v-for="parsedItem in parsedList"
      :key="parsedItem.uid"
      :parsed-item="parsedItem"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ParsedItem from './ParsedItem/index.vue';
import parsedListStore from '../store/parsedList.store';

export default defineComponent({
  components: {
    ParsedItem,
  },
  setup() {
    const {
      parsedList,
    } = parsedListStore;

    return {
      parsedList,
    };
  },
});
</script>

<style lang="scss" scoped>
.parsed-list {
  position: fixed;
  left: 0;
  top: 0;
  overflow-y: auto;
  width: 50%;
  height: 100vh;
  width: 100vw;
  z-index: 2;
}
</style>
