<template>
    <input :class="[
        'input', {
            'input_error': error
        }]" type="text" v-model="model">
</template>

<script lang="ts" setup>
import { defineModel, defineProps, watchEffect } from 'vue';

const model = defineModel<string>();

const props = withDefaults(defineProps<{
    error?: boolean
}>(), {
    error: false
});

watchEffect(() => {
    console.log(props?.error);
});

</script>

<style scoped>
.input {
    background-color: #fff;
    border-radius: 5px;
    outline: none;
    border: 0;
    display: block;
    width: 100%;
    padding: 12.75px;
    color: #353535;
    font-size: 1rem;
    border: 1px solid transparent;
}

.input_error {
    border-color: red;
}
</style>