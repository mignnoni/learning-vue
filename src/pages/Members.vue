<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { api } from '../services/api';
import MemberCard from '../components/MemberCard.vue';

interface IMember {
    id: number;
    fullName: string;
    email: string;
}

const members = ref<IMember[]>([]);

const computedMembers = computed(() => members.value);

const getMembers = () => {
    api.get<IMember[]>('teamMembers')
    .then((resp) => {
        members.value = resp.data;
    })
    .catch((err) => console.log(err?.message));
}

onMounted(() => {
    getMembers();
})

</script>

<template>
    <h1>Hello, world!</h1>
    <section id="members" class="flex flex-col space-y-4 w-full">
        <MemberCard v-for="member of computedMembers" :email="member.email" :name="member.fullName" />
    </section>
</template>