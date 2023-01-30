import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore(
  "user",
  () => {
    const user = ref(null);

    function SET_USER(userData) {
      user.value = userData;
      console.log(userData);
    }

    return { user, SET_USER };
  },
  { persist: true }
);
