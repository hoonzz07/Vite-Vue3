import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)
const apiUrl = import.meta.env.VITE_API_URL;
const appTitle = import.meta.env.VITE_APP_TITLE;

console.log('apiUrl : ' , apiUrl);
console.log('appTitle : ' , appTitle);

app.use(createPinia())
app.use(router)

app.mount('#app')
