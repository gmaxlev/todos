import { computed, toValue, type MaybeRefOrGetter } from "vue";

export function usePhoneNumberValidation(value: MaybeRefOrGetter<string>) {
    return computed(() => {
        return /^[a-zA-Z0-9\s\W]+$/.test(toValue(value).trim());
    });
}