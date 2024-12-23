<template>
    <select class="select" v-model="model">
        <slot></slot>
    </select>
</template>

<script setup lang="ts">
import { defineModel } from 'vue';

const model = defineModel<string | number>();

</script>

<style scoped>
.select {
    padding: 10px;
    font-size: 1rem;
}
</style>