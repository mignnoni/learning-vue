import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import Test from './components/Test.vue';
import HelloWorld from './components/HelloWorld.vue';
import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            counter: 0
        }
    },
    mutations: {
        increment(state: any, payload: any) {
            state.counter++;
            console.log(payload.value);
        }
    },
    getters: {
        counter(state: any) {
            return state.counter;
        }
    },
    actions: {
        incrementAsync(context: any, payload: any) {
            setTimeout(() => {
                context.commit('increment', payload);
            }, 2000);
        }
    }
});

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

app.use(store);

app.mount('#app');
