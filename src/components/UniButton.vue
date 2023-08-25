<!--
  Универсальная кнопка
-->

<script setup lang="ts">
  import IconCancel from './icons/IconCancel.vue';
  import IconCofirm from './icons/IconCofirm.vue';
  import IconDelete from './icons/IconDelete.vue';
  import IconEdit from './icons/IconEdit.vue';
  import IconSave from './icons/IconSave.vue';

  const props = defineProps<{
    type?: String;
    text?: String;
    size?: String | 's';
    viewIcon?: String | false;
    fn?: Function | null;
  }>();
</script>

<template>
  <div class="btn" :class="[props.type, props.size]" @click="props.fn">
    <IconCofirm v-if="props.type == 'confirm'" />
    <IconCancel v-if="props.type == 'cancel'" />
    <IconDelete v-if="props.type == 'delete'" />
    <IconEdit v-if="props.type == 'edit'" />
    <IconSave v-if="props.type == 'save'" />
    {{ props.text }}
  </div>
</template>

<style scoped lang="scss">
  .btn {
    width: 110px;
    height: 40px;
    background-color: var(--vt-c-btn-cancel);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.5em;
    line-height: 15px;
    transition: all 0.3s;
    margin: 5px 5px;

    cursor: pointer;
    svg {
      width: 25px;
      padding-right: 5px;
      color: #ffffff;
    }
    &:hover {
      filter: brightness(120%);
    }
    &:active {
      transform: translateY(3%);
    }
    &.s {
      width: 40px;
      min-width: 40px;
      svg {
        padding-right: 0;
      }
    }
    &.confirm,
    &.save {
      background-color: var(--vt-c-btn-confirm);
    }
    &.edit {
      background-color: var(--vt-c-btn-edit);
    }
  }
</style>
