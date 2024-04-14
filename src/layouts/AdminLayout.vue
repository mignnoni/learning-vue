<script setup lang="ts">
</script>

<template>
    <section class="w-full min-h-[100vh] bg-gray-950">
        <section id="header" class="w-full bg-gray-700 py-4 flex justify-center items-center">
            <h3 class="font-bold text-3xl text-white">Vue Manager</h3>
        </section>
        <main class="flex items-center justify-center pt-6 max-w-7xl">
            <RouterView />
        </main>
    </section>
</template>