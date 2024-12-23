<template>
    <Card class="card">
        <div class="filters main">
            <TextInput v-model="filters.title" placeholder="Filter by title" class="title" />
            <div class="filters">
                <TodoUserFilter />
                <TodoStatusFilter />
            </div>
        </div>
    </Card>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useTodoStore } from '../stores/todos';
import Card from './Card.vue';
import TextInput from './TextInput.vue';
import TodoUserFilter from './TodoUserFilter.vue';
import TodoStatusFilter from './TodoStatusFilter.vue';

const { filters } = storeToRefs(useTodoStore());

</script>

<style scoped lang="scss">
.card {
    position: sticky;
    top: 0;
}

.filters {
    display: flex;
    gap: 20px;
}

.title {
    width: 100%;
}

.main {
    flex-wrap: wrap;

    @include screen (md) {
        flex-wrap: nowrap;
    }
}
</style>