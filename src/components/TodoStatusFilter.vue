<template>
    <Select v-model="filters.status">
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
        <option value="favorites">Favorites</option>
    </Select>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useTodoStore } from '../stores/todos';
import { onMounted } from 'vue';
import Select from './Select.vue';

const todoStore = useTodoStore();

const { filters } = storeToRefs(todoStore);

onMounted(() => {
    todoStore.fetchTodos();
});
</script>