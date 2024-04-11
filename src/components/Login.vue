<script setup lang="ts">
import { ref } from 'vue';
import { api } from '../services/api';
import { useStore } from 'vuex';
import { LOGIN } from '../store/actions.type';
import { useRouter } from 'vue-router';

interface ILogin {
    email: string;
    password: string;
}

const store = useStore();
const router = useRouter();

const credentials = ref<ILogin>({
    email: '',
    password: ''
})

const getData = () => {
    api.get('/groups')
    .then((response) => {
        console.log(response.data);
    })
    .catch((err: any) => {
        console.log(err?.message);
    })
}

const login = () => store.dispatch(LOGIN, credentials.value).then(() => {
    router.push('test');
})

const getLogin = () => {
    login();
}

getData();

</script>

<template>
        <div class="w-full min-h-[100vh] flex justify-center items-center bg-gray-950">
            <div class="w-full max-w-96 flex-col p-8 bg-gray-200 rounded-xl">
                <div class="w-full">
                    <p class="text-gray-600">E-mail</p>
                    <input type="email" name="email" label="E-mail" v-model="credentials.email" class="px-4 py-2 mb-4 mt-2 w-full rounded-md" />
                </div>
                <div class="w-full">
                    <p class="text-gray-600">Senha</p>
                    <input type="password" name="password" label="Senha" v-model="credentials.password" class="px-4 py-2 mb-4 mt-2 w-full rounded-md" />
                </div>
                <div class="text-sm text-gray-500">Esqueci minha senha</div>
                <button class="mt-6 px-6 py-2 text-white rounded-xl bg-purple-500" @click="getLogin">
                    Entrar
                </button>
            </div>
        </div>
</template>