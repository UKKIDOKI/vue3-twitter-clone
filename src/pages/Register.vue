<template>
  <div class="flex flex-col items-center space-y-4 mt-10">
    <i :class="`fab fa-twitter text-4xl text-primary ${loading ? 'animate-bounce' : ''
    }`"></i>
    <span class="text-2xl font-bold">트위터 회원가입</span>
    <input type="text"
      class="w-96 px-4 py-3 border border-gray-300 focus:ring-2 focus:border-primary focus:outline-none"
      placeholder="닉네임" v-model="CreateUserInfo.username" />
    <input type="email"
      class="w-96 px-4 py-3 border border-gray-300 focus:ring-2 focus:border-primary focus:outline-none"
      placeholder="이메일" v-model="CreateUserInfo.email" />
    <input type="password"
      class="w-96 px-4 py-3 border border-gray-300 focus:ring-2 focus:border-primary focus:outline-none"
      placeholder="비밀번호" v-model="CreateUserInfo.password" />
    <input type="password" @keyup.enter="onRegister"
      class="w-96 px-4 py-3 border border-gray-300 focus:ring-2 focus:border-primary focus:outline-none"
      placeholder="비밀번호 확인" v-model="CreateUserInfo.passwordCheck" />
    <button v-if="loading" class="w-96 rounded bg-light text-white py-3">
      회원가입 중입니다.
    </button>

    <button v-else class="w-96 rounded-full bg-primary text-white py-3 hover:bg-dark" @click="onRegister">
      회원가입
    </button>
    <RouterLink to="/login">
      <button class="text-primary">계정이 이미 있으신가요 ? 로그인하기</button>
    </RouterLink>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { auth, USER_COLEECTION } from "@/firebase/index";
import { RouterLink, useRouter } from "vue-router";

const router = useRouter();
const loading = ref(false);

const CreateUserInfo = ref({
  username: "",
  email: "",
  password: "",
  passwordCheck: "",
});

const onRegister = async () => {
  if (
    !CreateUserInfo.value.username ||
    !CreateUserInfo.value.email ||
    !CreateUserInfo.value.password
  ) {
    alert("유저네임, 이메일, 비밀번호를 모두 입력해주세요.");
    return;
  }
  if (CreateUserInfo.value.password !== CreateUserInfo.value.passwordCheck) {
    // console.log(CreateUserInfo.value.email);
    alert("password가 일치하지 않습니다");
    return;
  }

  try {
    loading.value = true;
    const { user } = await auth.createUserWithEmailAndPassword(
      CreateUserInfo.value.email,
      CreateUserInfo.value.password
    );
    const doc = USER_COLEECTION.doc(user.uid);
    await doc.set({
      uid: user.uid,
      username: CreateUserInfo.value.username,
      email: CreateUserInfo.value.email,
      profile_image_url: "/profile.jpeg",
      background_image_url: "/background.png",
      num_tweets: 0,
      followers: [],
      followings: [],
      created_at: Date.now(),
    });
    alert("회원 가입에 성공하셨습니다. 로그인 해주세요.");
    console.log(CreateUserInfo.value.email);
    router.push({
      name: "login",
      query: { userEmail: CreateUserInfo.value.email },
    });
  } catch (e) {
    switch (e.code) {
      case "auth/invalid-email":
        alert("이메일을 바르게 입력해주세요");
        break;
      case "auth/weak-password":
        alert("비밀번호가 너무 쉬워요");
        break;
      case "auth/email-already-in-use":
        alert("이미 가입되어 있는 이메일 입니다.");
        break;
      default:
        alert("회원가입 실패");
        break;
    }
  } finally {
    loading.value = false;
  }
};
</script>

<style lang="scss" scoped>

</style>
