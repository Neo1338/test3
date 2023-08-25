import type { Ref } from 'vue';
import { reactive, ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', () => {
  // тип записи
  type typeRecord = {
    id: number;
    data: number;
  };

  // тип текущей записи
  type typeCurRecord = {
    edit: Boolean | false;
    data: typeRecord;
  };

  // тип попапа
  type popupType = {
    visible: Boolean | false;
    text: String | '';
    confirm: Function | null;
    cancel: Function | null;
  };

  // переменная управления попапом
  const popup: popupType = reactive({
    visible: false,
    text: '',
    confirm: null,
    cancel: null,
  });

  // текущая выделенная запись
  const curRecord: typeCurRecord = reactive({
    edit: false,
    data: { id: 0, data: 0 },
  });

  // список записей
  const list: Ref<Array<typeRecord>> = ref([]);
  // следующий ID списка
  const lastIndex: Ref<number> = ref(0);

  // чтение из localstorage
  function readFromLocal() {
    try {
      list.value = JSON.parse(localStorage.getItem('db') || '[]');
      sort();
    } catch (error) {
      console.log('Error from localStorage');
    }
  }

  // сброс выделенной записи
  function resetCurRecord() {
    curRecord.edit = false;
    curRecord.data = { id: 0, data: 0 };
  }

  // сортировка по требованиям
  function sort() {
    try {
      list.value.sort((a, b) => b.id - a.id);
    } catch (error) {
      console.log('Error sort');
    }
  }

  // сохранение в localstorage
  function saveFromLocal() {
    try {
      sort();
      localStorage.setItem('db', JSON.stringify(list.value));
    } catch (error) {
      console.log('Error save localStorage');
    }
  }

  // добавление записи
  function addRecord(data: number) {
    try {
      checkLastIndex();
      list.value.push({ id: lastIndex.value, data });
      saveFromLocal();
      curRecord.data = { id: 0, data: 0 };
    } catch (error) {
      console.log('Add error');
    }
  }

  // редактирование записи
  function editRecord(id: number, data: number) {
    popup.text = 'Вы действительно хотите изменить сохраненную запись?';
    popup.visible = true;
    popup.cancel = () => {
      popup.text = '';
      popup.visible = false;
      curRecord.edit = false;
      curRecord.data.id = 0;
      curRecord.data.data = 0;
    };
    popup.confirm = () => {
      try {
        for (let i = 0; i < list.value.length; i++) {
          if (list.value[i].id === id) {
            list.value[i].data = data;
            popup.text = '';
            popup.visible = false;
            curRecord.edit = false;
            curRecord.data.id = 0;
            curRecord.data.data = 0;
            saveFromLocal();
            return;
          }
        }
      } catch (error) {
        console.log('Edit error');
      }
    };
  }

  // сброс редактирования
  function cancelEditRecord() {
    popup.text = 'Вы действительно хотите отменить редактирование?';
    popup.visible = true;
    popup.cancel = () => {
      popup.text = '';
      popup.visible = false;
    };
    popup.confirm = () => {
      popup.text = '';
      popup.visible = false;
      curRecord.edit = false;
      curRecord.data.id = 0;
      curRecord.data.data = 0;
    };
  }

  // удаление записи
  function deleteRecord(id: number) {
    popup.text = 'Вы действительно хотите удалить сохраненную запись?';
    popup.visible = true;
    popup.cancel = () => {
      popup.text = '';
      popup.visible = false;
    };
    popup.confirm = () => {
      try {
        for (let i = 0; i < list.value.length; i++) {
          if (list.value[i].id === id) {
            list.value.splice(i, 1);
            saveFromLocal();
            popup.visible = false;
            popup.text = '';
            curRecord.edit = false;
            curRecord.data.id = 0;
            curRecord.data.data = 0;
            return;
          }
        }
      } catch (error) {
        console.log('Delete error');
      }
    };
  }

  // проверка последнего индекса
  function checkLastIndex() {
    try {
      for (let i = 0; i < list.value.length; i++) {
        if (list.value[i].id >= lastIndex.value) {
          lastIndex.value = list.value[i].id + 1;
        }
      }
    } catch (error) {
      console.log('Calc last Index error');
    }
  }

  return {
    resetCurRecord,
    cancelEditRecord,
    checkLastIndex,
    curRecord,
    popup,
    list,
    lastIndex,
    readFromLocal,
    saveFromLocal,
    addRecord,
    editRecord,
    deleteRecord,
  };
});
