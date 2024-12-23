import type { NavigationGuard } from "vue-router";
import { useAuthStore } from "../stores/auth";


export const onlyUnauthorizedGuard: NavigationGuard = (_to, _from, next) => {
  const authStore = useAuthStore();

  if (authStore.isAuthorized) {
    next("/todo");
  } else {
    next();
  }
};

export const onlyAuthorizedGuard: NavigationGuard = (_to, _from, next) => {
  const authStore = useAuthStore();

  if (authStore.isAuthorized) {
    next();
  } else {
    next("/");
  }
};
