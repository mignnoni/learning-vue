<template>
    <h2>Teste</h2>
    <button @click="navigate"></button>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    export default defineComponent({
        methods: {
            navigate() {
                this.$router.push('/')
            }
        }
    })
</script>
