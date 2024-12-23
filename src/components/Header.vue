<template>
    <header class="header">
        <div>
            Todo App
        </div>
        <button class="logout" @click="logout">
            Logout
        </button>
    </header>
</template>

<script setup lang="ts">
import { useAuthStore } from '../stores/auth';


const authStore = useAuthStore();

function logout() {
    authStore.signOut();
}

</script>

<style scoped>
.header {
    height: 60px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #e0e0e0;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logout {
    background-color: #ffbdbd;
    outline: none;
    border: none;
    cursor: pointer;
    color: #000;
    border-radius: 5px;
    padding: 5px;
}
</style>