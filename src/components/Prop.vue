<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        msg: {
            type: String,
            required: true
        }
    }
})
</script>

<template>
    <h1>{{ msg }}</h1>
</template>