import { createRouter, createWebHistory } from "vue-router";
import { useStore } from "vuex";
import Login from '../components/Login.vue';
import Test from '../components/Test.vue';
import AdminLayout from '../layouts/AdminLayout.vue';
import Members from '../pages/Members.vue';


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
        },
        {
            path: '/admin',
            component: AdminLayout,
            children: [
                {
                    'path': '/admin/members',
                    component: Members
                }
            ]
        }
    ]
});

export default router;