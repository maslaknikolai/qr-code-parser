<template>
  <div class="parsed-list">
    <ParsedItem
      v-for="parsedItem in sortedParsedList"
      :key="parsedItem.uid"
      :parsed-item="parsedItem"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import parsedListStore from '@/store/parsedList.store';
import ParsedItem from './ParsedItem/index.vue';

export default defineComponent({
  components: {
    ParsedItem,
  },
  setup() {
    const {
      parsedList,
    } = parsedListStore;

    const sortedParsedList = computed(() => parsedList.value.slice().sort(
      (a, b) => Number(b.parsedAt[0]) - Number(a.parsedAt[0]),
    ));

    return {
      sortedParsedList,
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
