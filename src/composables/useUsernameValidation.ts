import { computed, toValue, type MaybeRefOrGetter } from "vue";

export function useUsernameValidation(value: MaybeRefOrGetter<string>) {
    return computed(() => {
        return /^[a-zA-Z]+$/.test(toValue(value).trim());
    });
}