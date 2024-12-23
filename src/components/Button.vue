<template>
    <button class="button">
        <slot/>
    </button>
</template>

<style scoped>
.button {
    /* padding: 10px 20px; */
    border: none;
    border-radius: 5px;
    background-color: #519945;
    color: #fff;
    font-size: 1rem;
    cursor: pointer;
    outline: none;
    padding: 10.75px;
}
</style>