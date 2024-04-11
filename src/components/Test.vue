<template>
    <h1>Olá {{ user.name }}</h1>
    <h2>Teste</h2>
    <Prop :msg="message" />
    <button @click="navigate"></button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Prop from './Prop.vue';
import { mapGetters } from 'vuex';
    export default defineComponent({
        components: {
            Prop,
        },
        methods: {
            navigate() {
                this.$router.push('/')
            }
        },
        data() {
            return {
                message: 'Hello World'
            }
        },
        computed: {
            ...mapGetters(['user'])
        }
    })
</script>
