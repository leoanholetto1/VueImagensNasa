import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import Visualizar from './components/Visualizar.vue'
import Buscar from './components/Buscar.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/Visualizar', component: Visualizar },
        { path: '/Buscar', component: Buscar }
    ]
});

const app = createApp(App)
app.use(router);
app.mount('#app')