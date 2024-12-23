<template>
    <button :class='["button", { button_favorite: props.isFavorite }]'>
        {{ text }}
    </button>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue';

const props = defineProps<{
    isFavorite: boolean
}>();


const text = computed(() => props.isFavorite ? 'Remove from favorites 🌟' : 'Add to favorites 🌟');

</script>

<style scoped>
.todo {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.button {
    background-color: transparent;
    border: 1px solid #FFD700;
    color: white;
    text-align: center;
    cursor: pointer;
    border-radius: 5px;
    padding: 5px 10px;
}

.button_favorite {
    background-color: #574b00;
}
</style>