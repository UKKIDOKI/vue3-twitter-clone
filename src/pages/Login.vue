<template>
  <div class="flex flex-col items-center space-y-4 mt-10">
    <i :class="`fab fa-twitter text-4xl text-primary ${loading ? 'animate-bounce' : ''
    }`"></i>
    <span class="text-2xl font-bold">트위터 로그인</span>
    <input type="email"
      class="w-96 px-4 py-3 border border-gray-300 focus:ring-2 focus:border-primary focus:outline-none"
      placeholder="이메일" v-model="LoginUserInfo.email" />
    <input type="password"
      class="w-96 px-4 py-3 border border-gray-300 focus:ring-2 focus:border-primary focus:outline-none"
      placeholder="비밀번호" v-model="LoginUserInfo.password" @keyup.enter="onLogin" />
    <button v-if="loading" class="w-96 rounded bg-light text-white py-3">
      로그인 중입니다.
    </button>

    <button v-else class="w-96 rounded bg-primary text-white py-4 hover:bg-dark" @click="onLogin">
      로그인
    </button>
    <RouterLink to="/register">
      <button class="text-primary">계정이 없으신가요 ? 회원가입 하기</button>
    </RouterLink>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { auth, USER_COLEECTION } from "@/firebase/index";
import { useRouter, useRoute } from "vue-router";
import { useUserStore } from "@/store/user";
// import { storeToRefs } from "pinia";
// import store from "@/storse/index";

onMounted(() => {
  console.log("onMounted", store.$state.user);
});

const route = useRoute();
const router = useRouter();
const loading = ref(false);
const store = useUserStore();
// const { SET_USER } = storeToRefs(store);

const LoginUserInfo = ref({
  email: route.query.userEmail,
  password: "",
});

const onLogin = async () => {
  if (!LoginUserInfo.value.email || !LoginUserInfo.value.password) {
    alert("이메일, 비밀번호를 모두 입력해주세요.");
    return;
  }

  try {
    loading.value = true;
    const { user } = await auth.signInWithEmailAndPassword(
      LoginUserInfo.value.email,
      LoginUserInfo.value.password
    );

    // get user info
    const doc = await USER_COLEECTION.doc(user.uid).get();
    // console.log("dasdsadada", store.SET_USER);
    // console.log(doc.data());

    store.SET_USER(doc.data());
    console.log(store.$state.user);
    // store.commit("SET_USER", doc.data());
    router.replace("/");
  } catch (e) {
    switch (e.code) {
      case "auth/invalid-email":
        alert("잘못된 이메일 형식입니다.");
        break;
      case "auth/wrong-password":
        alert("비밀번호가 틀립니다.");
        break;
      case "auth/user-not-found":
        alert("등록되지 않은 이메일입니다.");
        break;
      default:
        alert(e.message);
        break;
    }
  } finally {
    loading.value = false;
  }
};
</script>

<style lang="scss" scoped>

</style>
