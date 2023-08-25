<!--
  Элемент списка записей
-->

<script setup lang="ts">
  import { useMainStore } from '../stores/index';

  const store = useMainStore();
  const props = defineProps<{
    id: number | 0;
    data: number;
  }>();
</script>

<template>
  <div class="list-item">
    <div class="data">ID {{ props.id }} - показания - {{ props.data }}С</div>
    <div class="actions">
      <UniButton
        type="edit"
        size="s"
        viewIcon="true"
        text=""
        :fn="
          () => {
            $router.push('add');
            store.curRecord.edit = true;
            store.curRecord.data.id = props.id;
            store.curRecord.data.data = props.data;
          }
        "
      />
      <UniButton
        type="delete"
        size="s"
        viewIcon="true"
        text=""
        :fn="
          () => {
            store.deleteRecord(props.id);
          }
        "
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
  .list-item {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-top: 2%;
    background-color: var(--vt-c-list-item);
    padding: 2%;
    margin-top: 2%;
    border-radius: 10px;
    transition: all 0.3s;
    cursor: default;
    &:hover {
      background-color: var(--vt-c-list-item-select);
    }
    &:first-child {
      margin-top: 0%;
    }
    .temp {
      margin-left: 3%;
    }
    .actions {
      min-width: 100px;
      display: flex;
      justify-content: end;
      position: relative;
      right: 0;
      > * {
        margin-left: 10px;
      }
    }
  }
</style>
