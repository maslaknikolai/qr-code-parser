<template>
  <div class="parsed-item">
    <RemoveBtn
      @remove="removeParsedItem(parsedItem)"
    />

    <div class="parsed-item__content">
      <div
        class="parsed-item__value"
        v-html="parsedValueHtml"
      />

      <button @click="opened = !opened">
        {{ opened ? 'Hide' : 'Show dates' }}
      </button>

      <div v-if="opened">
        <div
          v-for="parseDate in formatedDates"
          :key="parseDate"
          class="parse-date"
        >
          {{ parseDate }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed, defineComponent, PropType, ref,
} from 'vue';
import { IParsedItem } from '@/interfaces';
import matchUrls from '@/utils/matchUrls';
import escapeHtml from '@/utils/escapeHtml';
import parsedListStore from '@/store/parsedList.store';
import moment from 'moment';
import RemoveBtn from './RemoveBtn.vue';

export default defineComponent({
  components: {
    RemoveBtn,
  },
  props: {
    parsedItem: {
      type: Object as PropType<IParsedItem>,
      required: true,
    },
  },
  setup(props) {
    const {
      removeParsedItem,
    } = parsedListStore;

    const parsedValueHtml = computed(() => {
      let processedValue = props.parsedItem.value;

      const matchedUrls = matchUrls(processedValue);

      processedValue = matchedUrls.reduce((acc, url, i) => acc.replaceAll(
        url, `##{{##${i}##}}##`,
      ), processedValue);

      processedValue = escapeHtml(processedValue);

      processedValue = matchedUrls.reduce((acc, url, i) => acc.replaceAll(
        `##{{##${i}##}}##`,
        `<a href="${url}" target="_blank">${url}</a>`,
      ), processedValue);

      return processedValue;
    });

    const formatedDates = computed(() => props.parsedItem.parsedAt.map(
      (timestamp) => moment.unix(+timestamp / 1000).format('YYYY-MM-DD HH:mm:ss'),
    ));

    const opened = ref(false);
    return {
      removeParsedItem,
      parsedValueHtml,
      opened,
      formatedDates,
    };
  },
});
</script>

<style lang="scss" scoped>
.parsed-item {
  padding: 5px;
  max-width: 100%;
  background: rgba(#fff, .1);
  margin-bottom: 5px;
  display: flex;
  align-items: flex-start;
  font-family: monospace;
  overflow: hidden;

  &__created-at {
    color: lighten($color: #f00, $amount: 15%);
  }

  &__content {
    color: #fff;
    font-weight: bold;
    text-shadow: 0 0 2px rgba(#000, .6), 0 0 2px rgba(#000, .6);
    margin-top: 1px;
    width: 100%;
    overflow: hidden;
    word-break: break-all;
  }

  &__found-urls {
    margin-top: 10px;
  }

  &__value {
    margin-top: 10px;
    margin-bottom: 10px;
  }
}

.parse-date {
  display: inline-block;
  margin-right: 10px;
  margin-bottom: 5px;
}
</style>
