<template>
    <Card>
        <form @submit.prevent="onSubmit" class="form">
            <TextInput v-model="titleInput" :error="!isValidTitle && wasSubmitted" placeholder="Title" />
            <div class="rest">
                <TodoUsersSelect v-model="userInput" />
                <Button type="submit" class="button">
                    Add Todo
                </Button>
            </div>
        </form>
    </Card>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import Card from './Card.vue';
import TodoUsersSelect from './TodoUsersSelect.vue';
import type { User } from '../types';
import TextInput from './TextInput.vue';
import Button from './Button.vue';
import { useTodoStore } from '../stores/todos';

const wasSubmitted = ref(false);

const userInput = ref<null | User['id']>(null);
const titleInput = ref<string>('');

const isValidTitle = computed(() => titleInput.value.trim().length > 0);
const isValidUser = computed(() => userInput.value !== null);

const isValidForm = computed(() => isValidTitle.value && isValidUser.value);

const todoStore = useTodoStore();

function onSubmit() {

    wasSubmitted.value = true;

    if (!isValidForm.value) {
        return;
    }

    todoStore.addTodo({
        title: titleInput.value,
        userId: userInput.value!
    });


    titleInput.value = '';
    userInput.value = null;
    wasSubmitted.value = false;
}

</script>


<style scoped lang="scss">
.form,
.rest {
    display: flex;
    gap: 20px;
}

.form {
    flex-wrap: wrap;

    @include screen(md) {
        flex-wrap: nowrap;
    }
}

.button {
    white-space: nowrap;
}
</style>