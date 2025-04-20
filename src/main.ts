import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import './scss/element.scss';
import ElementPlus from 'element-plus';

const app = createApp(App);

app.use(router);
app.use(ElementPlus);
app.mount('#app');
