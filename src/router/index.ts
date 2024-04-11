import { createRouter, createWebHistory } from "vue-router";
import { useStore } from "vuex";
import Login from '../components/Login.vue';
import Test from '../components/Test.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '',
            component: Login,
        },
        {
            path: '/test',
            component: Test,
            beforeEnter: () => {
                const { getters } = useStore();

                if (!getters.isAuth)
                    return { path: '' }
            }
        }
    ]
});

export default router;