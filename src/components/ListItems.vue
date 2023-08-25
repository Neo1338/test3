<!--
  Список записей
-->

<script setup lang="ts">
  import ListItem from './ListItem.vue';
  import { useMainStore } from '../stores/index';

  const store = useMainStore();
</script>

<template>
  <div class="list-conteiner">
    <h1 v-if="store.list.length == 0">Нет сохраненных данных</h1>

    <ListItem v-for="elem in store.list" :key="elem.id" :id="elem.id" :data="elem.data" />
  </div>
</template>

<style scoped lang="scss">
  .list-conteiner {
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    max-width: 400px;
    width: 100%;
    border: 2px var(--vt-c-list-border) solid;
    border-radius: 10px;
    min-height: 50px;
    box-sizing: border-box;
    padding: 2%;
    h1 {
      text-align: center;
    }
  }
</style>
