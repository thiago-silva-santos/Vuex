import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import Painel from './components/Painel'
createApp(App).use(store).component('Painel', Painel).mount('#app')
