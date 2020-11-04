<template>
  <button
    :class="[
      'remove-btn',
      {
        'remove-btn--timer': timerStarted
      }
    ]"
    @click="clickHandler()"
  >
    <div
      v-if="timerStarted"
      class="remove-btn__seconds"
    >
      {{ secondsRemains }}
    </div>

    <div
      v-else
      class="remove-btn__icon"
    >
      <IconRemove
        width="25px"
      />
    </div>
  </button>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import IconRemove from '@/components/icons/IconRemove.vue';

const ASK_SECONDS = 3;

export default defineComponent({
  components: {
    IconRemove,
  },
  setup(props, { emit }) {
    const timer = ref(0);
    const timerStarted = computed(() => !!timer.value);
    const secondsRemains = ref(ASK_SECONDS);

    function dropTimer() {
      clearInterval(timer.value);
      secondsRemains.value = ASK_SECONDS;
      timer.value = 0;
    }

    function startTimerForAccept() {
      timer.value = setInterval(() => {
        secondsRemains.value -= 1;

        if (secondsRemains.value === 0) {
          dropTimer();
        }
      }, 1000);
    }

    function accept() {
      dropTimer();
      emit('remove');
    }

    function clickHandler() {
      if (timer.value) {
        accept();
      } else {
        startTimerForAccept();
      }
    }

    return {
      secondsRemains,
      clickHandler,
      timerStarted,
    };
  },
});
</script>

<style lang="scss" scoped>
.remove-btn {
  background: none;
  border: 1px solid #f00;
  border-radius: 50%;
  margin-right: 5px;
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: border-color .3s;

  &--timer {
    border-color: rgb(214, 181, 32);
  }

  &__icon {
    display: flex;
    align-items: center;
    color: #f00;
  }

  &__seconds {
    color: rgb(214, 181, 32);
    font-size: 20px;
  }
}
</style>
