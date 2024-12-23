<template>
    <Card>
        <div class="todo">
            <p>
                User: {{ userId }}
            </p>
            <p>
                Title: {{ title }}
            </p>
            <p>
                Completed: {{ completedEmoji }}
            </p>
            <div>
                <FavoriteButton :is-favorite="isFavorite" @click="onFavoriteClick">
                    Add to favorites
                </FavoriteButton>
            </div>
        </div>
    </Card>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue';
import type { TodoClient } from '../types';
import Card from './Card.vue';
import FavoriteButton from './FavoriteButton.vue';
import { useTodoStore } from '../stores/todos';

const props = defineProps<{
    todo: TodoClient
}>();

const todoStore = useTodoStore();

const userId = computed(() => props.todo.userId);
const isFavorite = computed(() => props.todo.isFavorite);
const title = computed(() => props.todo.title);
const completed = computed(() => props.todo.completed);

const completedEmoji = computed(() => completed.value ? '✅' : '❌');

function onFavoriteClick() {
    if (isFavorite.value) {
        todoStore.removeFavorite(props.todo.id);
    } else {
        todoStore.addFavorite(props.todo.id);
    }
}

</script>

<style scoped>
.todo {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
</style>