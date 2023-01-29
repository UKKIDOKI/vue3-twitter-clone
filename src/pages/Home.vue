<template>
  <!-- main part -->
  <div class="flex-1 border-r border-gray-100 overflow-y-auto">
    <div class="flex flex-col">
      <!-- page title -->
      <div class="border-b border-gray-100 px-3 py-2 font-bold text-lg">홈</div>
      <!-- tweeting section -->
      <div class="flex px-3 py-3 border-b-8 border-gray-100"></div>
      <!-- tweets -->
      <Tweet v-for="item in 5" :key="item" />
    </div>
  </div>
  <!-- trend part -->
  <Trends />
</template>

<script setup>
import Tweet from "@/components/Tweet.vue";
</script>

<style lang="scss" scoped>

</style>
