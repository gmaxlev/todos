<template>
    <form @submit.prevent="onSubmit" action="" class="form">
        <Alert v-if="isSignUpError">
            Login error
        </Alert>
        <TextInput placeholder="Username" v-model="usernameInput" :error="!visibleErrors.username"
            :disabled="isDisabled" />
        <TextInput placeholder="Phone Number" v-model="phoneNumberInput" :error="!visibleErrors.phoneNumber"
            :disabled="isDisabled" />
        <Button type="submit">
            Register
        </Button>
    </form>
</template>

<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue';
import Button from './Button.vue';
import TextInput from './TextInput.vue';
import { useUsernameValidation } from '../composables/useUsernameValidation';
import { usePhoneNumberValidation } from '../composables/usePhoneNumberValidation';
import Alert from './Alert.vue';
import { useAuthStore } from '../stores/auth';
import { storeToRefs } from 'pinia';

const authStore = useAuthStore();

const { isPending, isSignUpError } = storeToRefs(authStore);



const isDisabled = computed(() => isPending.value);

const usernameInput = ref('');
const phoneNumberInput = ref('');

const wasSubmitted = ref(false);

const isValidUsername = useUsernameValidation(usernameInput);
const isValidPhoneNumber = usePhoneNumberValidation(phoneNumberInput);
const isValidForm = computed(() => isValidUsername.value && isValidPhoneNumber.value);

const visibleErrors = computed(() => {
    if (!wasSubmitted.value) {
        return {
            username: true,
            phoneNumber: true
        }
    }

    return {
        username: isValidUsername.value,
        phoneNumber: isValidPhoneNumber.value
    }
});

watchEffect(() => {
    console.log(visibleErrors.value);
});


async function onSubmit() {
    wasSubmitted.value = true;

    if (!isValidForm.value) {
        return;
    }

    await authStore.signUp(
        usernameInput.value,
        phoneNumberInput.value
    );
}
</script>

<style scoped>
.form {
    display: flex;
    flex-direction: column;
    gap: 20px;
}
</style>