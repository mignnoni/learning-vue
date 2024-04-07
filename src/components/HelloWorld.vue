<script setup lang="ts">
import { computed } from 'vue';
import { api } from '../services/api';
import { useStore } from 'vuex';

const store = useStore();

const getData = () => {
    api.get('/groups')
    .then((response) => {
        console.log(response.data);
    })
    .catch((err: any) => {
        console.log(err?.message);
    })
}

const count = computed(() => store.state.counter);

const increment = () => {
    store.state.counter++;
}

getData();

</script>

<template>

    <div class="mt-2 bg-blue-400 rounded-lg">
        <p>
            {{ count }}
        </p>
        <button @click="increment">
f
        </button>
    </div>

    <p>
        Check out
        <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the official Vue + Vite
        starter
    </p>
    <p>
        Install
        <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
        in your IDE for a better DX
    </p>
    <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>