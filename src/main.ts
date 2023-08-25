import './assets/main.scss';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import ConfirmPopup from './components/ConfirmPopup.vue';
import UniButton from './components/UniButton.vue';

const app = createApp(App);

app.component('ConfirmPopup', ConfirmPopup);
app.component('UniButton', UniButton);
app.use(createPinia()).use(router).mount('#app');
