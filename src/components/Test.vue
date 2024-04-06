<template>
    <h2>Teste</h2>
    <Prop :msg="message" />
    <button @click="navigate"></button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Prop from './Prop.vue';
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
        }
    })
</script>
