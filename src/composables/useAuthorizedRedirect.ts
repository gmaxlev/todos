import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { useAuthStore } from "../stores/auth";
import { toValue, watchEffect, type MaybeRefOrGetter } from "vue";

export function useAuthorizedRedirect(to: MaybeRefOrGetter<string>) {
  const router = useRouter();

  const { isAuthorized } = storeToRefs(useAuthStore());

  watchEffect(() => {
    if (!isAuthorized.value) {
      return;
    }

    router.push(toValue(to));
  });
}
