<script setup lang="ts"></script>

<template>
  <header class="py-4 border-b">
    <nav class="flex container items-center">
      <NuxtLink to="/" class="flex gap-1 items-center">
        <NuxtImg width="40px" src="/its-icon-3.png" format="webp" alt="" />
        <span class="text-1xl font-bold">IT Squarehub</span>
      </NuxtLink>
      <ul class="flex gap-6 ml-auto text-xl font-bold capitalize">
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
            <NuxtLink to="/contactUs">Contact Us</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

