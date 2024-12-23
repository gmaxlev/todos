<template>
    <div class="card">
        <slot></slot>
    </div>
</template>

<style scoped>
.card {
    background-color: #3b3b3b;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 20px;
}
</style>