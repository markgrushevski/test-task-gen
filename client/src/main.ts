import { pinia } from '@app';
import { createApp } from 'vue';
import App from './TheApp.vue';

createApp(App).use(pinia).mount('#app');
