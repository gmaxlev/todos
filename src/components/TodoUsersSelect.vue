<template>
    <Select v-model="value">
        <option disabled value="">Select User</option>
        <option v-for="user in users" :key="user" :value="user">{{ user }}</option>
    </Select>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useTodoStore } from '../stores/todos';
import { computed, defineModel } from 'vue';
import Select from './Select.vue';
import type { User } from '../types';

const todoStore = useTodoStore();

const model = defineModel<User['id'] | null>()

const value = computed({
    get() {
        return model.value ? model.value.toString() : "";
    },
    set(value: User['id']) {
        model.value = Number(value);
    }
});

const { users } = storeToRefs(todoStore);
</script>