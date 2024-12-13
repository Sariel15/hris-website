<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
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

  .nuxt-loading-indicator {
    background: repeating-linear-gradient(
      to right,
      #00B8D4 0%,
      #034796 50%,
      #00B8D4 100%
    );
    height: 3px;
  }

  .page-enter-active,
  .page-leave-active {
    transition: all 0.2s ease-out;
  }

  .page-enter-from {
    opacity: 0;
    transform: translateY(10px);
  }

  .page-leave-to {
    opacity: 0;
    transform: translateY(-10px);
  }
</style>