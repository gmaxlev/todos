<script setup lang="ts">
import AuthForm from '../components/AuthForm.vue';
import ModalContent from '../components/ModalContent.vue';
import { useAuthorizedRedirect } from '../composables/useAuthorizedRedirect';

useAuthorizedRedirect('/todo');
</script>

<template>
    <div class="page">
        <div class="container class content">
            <ModalContent>
                <template #header>
                    <span>Sign Up</span>
                </template>
                <AuthForm />
            </ModalContent>
        </div>
    </div>
</template>

<style scoped>
.page {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}
.content {
    display: flex;
    justify-content: center;
}
</style>