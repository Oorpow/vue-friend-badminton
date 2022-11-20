<template>
  <div class="friend_item">
    <div>
      <ElAvatar size="large" />
    </div>
    <div ml-2 flex flex-col overflow-hidden>
      <h4 m-0>TAKERA</h4>
      <span text-sm truncate>1231231231231231231231111111111</span>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.friend_item {
  @apply flex
    items-center
    p-3
    first:bg-gray-1
    hover:bg-gray-1
    cursor-pointer;
}
</style>
