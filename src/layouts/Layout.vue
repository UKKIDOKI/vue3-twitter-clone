<template>
  <component :is="components[layout]"></component>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import EmptyLayout from "@/layouts/EmptyLayout.vue";

const route = useRoute();
const components = {
  DefaultLayout,
  EmptyLayout,
};
route.meta.layout = "";
const layout = computed(() => route.meta.layout || "DefaultLayout");
</script>

<style lang="scss" scoped>

</style>
