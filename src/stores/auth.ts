import { defineStore } from "pinia";
import { signUp } from "../api";
import { getCurrentUser, setCurrentUser } from "../utils";

export const useAuthStore = defineStore("counter", {
  state: () => {
    return {
      isSignUpError: false,
      pendings: 0,
      user: getCurrentUser(),
    };
  },
  getters: {
    isPending(state) {
      return state.pendings > 0;
    },
    isAuthorized(state) {
        return !!state.user;
    }
  },
  actions: {
    async signUp(username: string, phoneNumber: string) {
      try {
        this.pendings += 1;
        this.isSignUpError = false;
        const user = await signUp(username, phoneNumber);

        if (!user) {
          this.isSignUpError = true;
        } else {
          this.user = user;
          setCurrentUser(user);
        }

      } finally {
        this.pendings -= 1;
      }
    },
    async signOut() {
        this.user = null;
        setCurrentUser(null);
    }
  },
});
