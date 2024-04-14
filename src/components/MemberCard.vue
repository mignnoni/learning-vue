<script setup lang="ts">

const props = defineProps({
    name: String,
    email: String
})

</script>

<template>
    <div
        class="w-full rounded-lg bg-purple-700 text-white p-6 flex flex-col space-y-2">
        <p class="text-xl">{{ name }}</p>
        <p>E-mail: {{ email }}</p>
    </div>
</template>