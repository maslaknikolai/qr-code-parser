<template>
  <button
    class="remove-btn"
    v-html="text"
    @click="clickHandler()"
  />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

const ASK_SECONDS = 3;

export default defineComponent({
  setup(props, { emit }) {
    const text = ref('&times;');

    const timer = ref(0);
    function dropTimer() {
      clearInterval(timer.value);
      timer.value = 0;
      text.value = '&times;';
    }

    function startTimerForAccept() {
      text.value = String(ASK_SECONDS);

      timer.value = setInterval(() => {
        text.value = String(Number(text.value) - 1);

        if (Number(text.value) === 0) {
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
      text,
      clickHandler,
    };
  },
});
</script>

<style scoped>
.remove-btn {
  background: none;
  border: 1px solid #f00;
  color: #f00;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  font-size: 40px;
  outline: none;
}
</style>
