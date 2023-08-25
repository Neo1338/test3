<!--
  Главная страница
-->

<script setup lang="ts">
  import ListItems from '../components/ListItems.vue';
  import { useMainStore } from '../stores/index';

  const store = useMainStore();

  store.resetCurRecord();
</script>

<template>
  <main>
    <ListItems />
  </main>
</template>
