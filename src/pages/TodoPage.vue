<script setup lang="ts">
import Header from '../components/Header.vue';
import TodoList from '../components/TodoList.vue';
import { useUnauthorizedRedirect } from '../composables/useUnauthorizedRedirect';

useUnauthorizedRedirect('/');
</script>

<template>
    <div class="container">
        <Header />
        <main>
            <TodoList />
        </main>
    </div>
</template>