<template>
    <div class="parsed-item">
        <button
            class="parsed-item__remove-btn"
            @click="removeParsedItem(parsedItem)"
        >
            &times;
        </button>

        <div class="parsed-item__content">
            <span class="parsed-item__created-at">
                {{ parsedItem.createdAt }}
            </span>

            <span
                v-if="parsedItem.quantity"
                class="parsed-item__qty"
            >
                ({{ parsedItem.quantity }})
            </span>

            <div class="parsed-item__value">
              {{ parsedItem.value }}
            </div>

            <div
              class="parsed-item__found-urls"
              v-if="foundUrls.length"
            >
              Found URL's:

              <div
                v-for="url in foundUrls"
                :key="url"
              >
                <a
                  :href="url"
                  target="_blank"
                >
                  {{ url }}
                </a>
              </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';
import { IParsedItem } from '../interfaces';
import parsedListStore from '../store/parsedList.store';

export default defineComponent({
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

    const foundUrls = computed(() => props.parsedItem.value.match(/(https?:\/\/[\S]+)/g) || []);

    return {
      removeParsedItem,
      foundUrls,
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

    &__remove-btn {
        background: none;
        border: 1px solid #f00;
        color: #f00;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 5px;
        flex-shrink: 0;
    }

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

    &__qty {
        font-size: 10px;
        color: #f00;
    }

    &__found-urls {
      margin-top: 10px;
    }

    &__value {
      margin-top: 10px;
    }
}
</style>
