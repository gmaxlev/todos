<template>
    <Select v-model="usersFilterRef">
        <option value="all">All users</option>
        <option v-for="user in users" :key="user" :value="user">{{ user }}</option>
    </Select>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useTodoStore } from '../stores/todos';
import { onMounted, computed } from 'vue';
import Select from './Select.vue';

const todoStore = useTodoStore();

const { filters, users } = storeToRefs(todoStore);

const usersFilterRef = computed({
    get() {
        return filters.value.userId === null ? 'all' : filters.value.userId;
    },
    set(value: string) {
        const newValue = value === 'all' ? null : Number(value);
        filters.value.userId = newValue;
    }
});

onMounted(() => {
    todoStore.fetchTodos();
});
</script>