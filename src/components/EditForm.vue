<!--
  Форма редактирования
-->

<script setup lang="ts">
  import { useMainStore } from '../stores/index';

  const store = useMainStore();
</script>

<template>
  <div class="add-view">
    <div class="edit-data">
      <div class="field">
        <label for="temp">Показания t - </label>
        <input type="number" id="temp" v-model="store.curRecord.data.data" />
      </div>
    </div>

    <div class="actions">
      <UniButton
        v-if="store.curRecord.edit"
        type="edit"
        viewIcon="true"
        text="Изменить"
        :fn="
          () => {
            store.editRecord(store.curRecord.data.id, store.curRecord.data.data);
          }
        "
      />
      <UniButton
        v-if="store.curRecord.edit"
        type="cancel"
        viewIcon="true"
        text="Отменить"
        :fn="
          () => {
            store.cancelEditRecord();
          }
        "
      />
      <UniButton
        v-if="store.curRecord.edit"
        type="delete"
        viewIcon="true"
        text="Удалить"
        :fn="
          () => {
            store.deleteRecord(store.curRecord.data.id);
          }
        "
      />
      <UniButton
        v-if="!store.curRecord.edit"
        type="save"
        viewIcon="true"
        text="Добавить"
        :fn="
          () => {
            store.addRecord(store.curRecord.data.data);
          }
        "
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
  .add-view {
    position: relative;
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
    max-width: 400px;
    width: 100%;
    border: 2px var(--vt-c-list-border) solid;
    border-radius: 10px;
    height: 165px;
    box-sizing: border-box;
    padding: 10px;
    .edit-data {
      display: flex;
      > :last-child {
        margin-left: 10px;
      }
    }
    .field {
      display: flex;
      font-size: 18px;
      input {
        text-align: center;
      }
      label {
        margin-right: 5px;
      }
      #temp {
        max-width: 75px;
      }
    }
    .actions {
      width: 100%;
      margin-top: 15px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-wrap: wrap;
    }
  }
</style>
