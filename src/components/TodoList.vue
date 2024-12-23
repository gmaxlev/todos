<template>
    <div v-if="filteredTodos" class="totos">
        <TodoAddForm />
        <TodoFilters />
        <div v-if="!isEmpty" class="list">
            <div v-for="todo in filteredTodos" :key="todo.id">
                <TodoListItem :todo="todo" />
            </div>
        </div>
        <Alert v-if="isEmpty">
            No todos found
        </Alert>
    </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useTodoStore } from '../stores/todos';
import { computed, onMounted } from 'vue';
import TodoListItem from './TodoListItem.vue';
import TodoFilters from './TodoFilters.vue';
import TodoAddForm from './TodoAddForm.vue';
import Alert from './Alert.vue';

const todoStore = useTodoStore();

const { filteredTodos } = storeToRefs(todoStore);

const isEmpty = computed(() => filteredTodos.value.length === 0);

onMounted(() => {
    todoStore.fetchTodos();
});

</script>

<style scoped lang="scss">
.totos {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.list {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;

    @include screen (md) {
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>