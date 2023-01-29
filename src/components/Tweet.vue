<template>
  <!-- tweets -->
  <div
    class="flex px-3 py-3 border-b border-gray-100 hover:bg-gray-50 cursor-pointer"
  >
    <div class="ml-3 flex-1 flex flex-col space-y-1">
      <div class="text-sm space-x-1">
        <span class="font-bold">댕댕</span>
        <span class="text-gray-500 text-xs">@ukki</span>
        <span>·</span>
        <span class="text-gray-500 text-xs">7분</span>
      </div>
      <!-- tweet body -->
      <div>내용 주저리주저리 주주저리주저리</div>
      <!-- tweet actions -->
      <div class="flex justify-between">
        <div class="text-gray-500 hover:text-primary">
          <i class="far fa-comment hover:bg-blue-50 rounded-full p-2"></i>
          <span class="ml-1 text-sm">1</span>
        </div>
        <div class="text-gray-500 hover:text-primary">
          <i class="far fa-comment hover:bg-green-50 rounded-full p-2"></i>
          <span class="ml-1 text-sm">1</span>
        </div>
        <div class="text-gray-500 hover:text-primary">
          <i class="far fa-comment hover:bg-red-50 rounded-full p-2"></i>
          <span class="ml-1 text-sm">1</span>
        </div>
        <div class="text-gray-500 hover:text-primary">
          <i class="far fa-share-square hover:bg-blue-50 rounded-full p-2"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
