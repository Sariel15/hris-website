<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
  definePageMeta({
    layout: 'default'
  })
</script>

<style>
  html {
    scroll-behavior: smooth;
  }

  /* Page Transition Classes */
  .page-enter-active,
  .page-leave-active {
    transition: all 0.4s ease-in-out;
  }

  .page-enter-from {
    opacity: 0;
    transform: translateY(20px);
  }

  .page-leave-to {
    opacity: 0;
    transform: translateY(-20px);
  }
</style>