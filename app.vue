<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script lang="ts" setup></script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: 0.4s;
  opacity: 1;
  transform: translateX(0);
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(25%);
}
</style>
