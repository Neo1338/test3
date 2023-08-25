<!--
  Попап
-->

<script setup lang="ts">
  const props = defineProps<{
    popText?: String;
    confirm?: Function | null;
    cancel?: Function | null;
  }>();
</script>

<template>
  <div class="wrap-popup">
    <div class="popup">
      <div class="text">{{ props.popText }}</div>
      <div class="btn-block">
        <UniButton type="confirm" viewIcon="true" text="OK" :fn="props.confirm" />
        <UniButton type="cancel" viewIcon="true" text="Отмена" :fn="props.cancel" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .wrap-popup {
    position: fixed;
    z-index: 10;
    display: flex;
    justify-content: center;
    inset: 0;
    background-color: var(--vt-c-popup-wrap);
    transition: background 0.2s;
    .popup {
      position: absolute;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      background-color: var(--color-background);
      border-radius: 1em;
      box-sizing: border-box;
      padding: 1em;
      filter: drop-shadow(0px 4px 6px var(--vt-c-black));
      width: 300px;
      min-height: 120px;
      margin-top: 15vh;
      .text {
        text-align: center;
        font-size: 15px;
        padding: 10px 5px 20px;
      }
      .btn-block {
        display: flex;
        justify-content: space-around;
      }
    }
  }
</style>
