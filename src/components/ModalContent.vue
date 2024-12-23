<template>
    <div class="modal">
        <div class="header">
            <slot name="header">Header</slot>
        </div>
        <div class="content">
            <slot />
        </div>
    </div>
</template>


<style scoped>
.modal {
    max-width: 447px;
    width: 100%;
    border-radius: 5px;
    background-color: #C3C3C3;
}

.header {
    background: #A5A5A5;
    text-align: center;
    padding: 13.5px;
    border-radius: 5px 5px 0 0;
    color: #5F5F5F;
}

.content {
    padding: 25px;
}
</style>