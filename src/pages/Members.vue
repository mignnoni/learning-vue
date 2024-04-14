<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';

interface IMember {
    id: number;
    name: string;
    email: string;
}

const members = ref<IMember[]>([]);

const computedMembers = computed(() => members.value);

onMounted(() => {
    setTimeout(() => {
        members.value = [
            {
                id: 1,
                name: 'First member',
                email: 'firstmember@email.com'
            },
            {
                id: 2,
                name: 'Second member',
                email: 'secondmember@email.com'
            },
            {
                id: 3,
                name: 'Third member',
                email: 'thirdmember@email.com'
            }
        ]
    }, 3000);
})

</script>

<template>
    <h1>Hello, world!</h1>
    <section id="members" class="flex flex-col space-y-4 w-full">
        <div v-for="member of computedMembers" class="w-full rounded-lg bg-purple-700 text-white p-6 flex flex-col space-y-2">
            <p class="text-xl">{{ member.name }}</p>
            <p>E-mail: {{ member.email }}</p>
        </div>
    </section>
</template>