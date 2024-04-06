import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import Test from './components/Test.vue';
import HelloWorld from './components/HelloWorld.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '',
            component: HelloWorld
        },
        {
            path: '/test',
            component: Test
        }
    ]
});

const app = createApp(App);

app.use(router);

app.mount('#app');
