<template>
  <div class="flex-1 flex" v-if="profileUser">
    <!-- profile section -->
    <div class="flex-1 flex flex-col border-r border-color">
      <!-- title -->
      <div class="px-3 py-1 flex border-b border-color">
        <button class="mr-4" @click="router.go(-1)">
          <i class="fas fa-arrow-left text-primary p-3 rounded-full hover:bg-blue-50"></i>
        </button>
        <div>
          <div class="font-extrabold text-lg">{{ profileUser.email }}</div>
          <div class="text-xs text-gray">{{ profileUser.num_tweets }} 트윗</div>
        </div>
      </div>
      <!-- background image -->
      <div class="bg-gray-300 h-48 relative flex-none">
        <img :src="profileUser.background_image_url" class="w-full h-48 object-cover" />
        <!-- profile image -->
        <div class="border-4 border-white bg-gray-100 w-28 h-28 rounded-full absolute -bottom-14 left-2">
          <img :src="profileUser.profile_image_url"
            class="w-full h-full rounded-full opacity-90 hover:opacity-100 cursor-pointer" />
        </div>
      </div>
      <!-- profile edit button -->
      <div class="text-right mt-2 mr-2 mb-10 relative">
        <div v-if="currentUser.uid === profileUser.uid">
          <button @click="showProfileEditModal = true"
            class="border text-sm border-primary text-primary px-3 py-2 hover:bg-blue-50 font-bold rounded-full">
            프로필 수정
          </button>
        </div>
        <div v-else>
          <div v-if="currentUser.followings.includes(profileUser.uid)" class="" @click="onUnFollow">
            <button
              class="absolute w-24 right-0 text-sm bg-primary text-white px-3 py-2 hover:opacity-0 font-bold rounded-full">
              팔로잉
            </button>
            <button
              class="absolute w-24 right-0 text-sm bg-red-400 text-white px-3 py-2 opacity-0 hover:opacity-100 font-bold rounded-full">
              언팔로우
            </button>
          </div>
          <div v-else @click="onFollow">
            <button
              class="absolute right-0 w-24 border text-sm border-primary text-primary px-3 py-2 hover:bg-blue-50 font-bold rounded-full">
              팔로우
            </button>
          </div>
        </div>
      </div>
      <!-- user info -->
      <div class="mx-3 mt-2">
        <div class="font-extrabold text-lg">{{ profileUser.email }}</div>
        <div class="text-gray">@{{ profileUser.username }}</div>
        <div>
          <span class="text-gray">가입일:</span>
          <span class="text-gray">{{
            moment(profileUser.created_at).format("YYYY년 MM월")
          }}</span>
        </div>
        <div>
          <span class="font-bold mr-1">{{
            profileUser.followings.length
          }}</span>
          <span class="text-gray mr-3">팔로우 중</span>
          <span class="font-bold mr-1">{{ profileUser.followers.length }}</span>
          <span class="text-gray">팔로워</span>
        </div>
      </div>
      <!-- tabs -->
      <div class="flex border-b border-color mt-3">
        <div @click="currentTab = 'tweet'" :class="`${currentTab == 'tweet'
          ? 'border-b border-primary text-primary'
          : ' text-gray'
        } py-3  font-bold  text-center w-1/3 hover:bg-blue-50 cursor-pointer hover:text-primary`">
          트윗
        </div>
        <div @click="currentTab = 'retweet'" :class="`${currentTab == 'retweet'
          ? 'border-b border-primary text-primary'
          : ' text-gray'
        } py-3  font-bold  text-center w-1/3 hover:bg-blue-50 cursor-pointer hover:text-primary`">
          리트윗
        </div>
        <div @click="currentTab = 'like'" :class="`${currentTab == 'like'
          ? 'border-b border-primary text-primary'
          : ' text-gray'
        } py-3  font-bold  text-center w-1/3 hover:bg-blue-50 cursor-pointer hover:text-primary`">
          좋아요
        </div>
      </div>
      <!-- tweets -->
      <div class="overflow-y-auto">
        <Tweet v-for="tweet in currentTab == 'tweet'
      ? tweets
      : currentTab == 'retweet'
        ? reTweets
        : likeTweets" :key="tweet.id" :currentUser="currentUser" :tweet="tweet" />
      </div>
    </div>
    <!-- trend section -->
    <Trends />
    <profile-edit-modal v-if="showProfileEditModal" @close-modal="showProfileEditModal = false"></profile-edit-modal>
  </div>
</template>

<script setup>
import { useUserStore } from "@/store/user";
import { ref, computed, onBeforeMount } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const store = useUserStore();
const currentUser = computed(() => store.$state.user);
const profileUser = ref(null);

onBeforeMount(() => {
  const profileUID = route.params.uid ?? currentUser.value.uid;
});
</script>

<style lang="scss" scoped>

</style>
