<template>
    <header class="py-4 border-b border-gray-200 shadow-md">
        <nav class="flex items-center justify-between px-4 md:px-20">
        <!-- Logo -->
<NuxtLink to="/" class="flex items-center gap-1">
  <NuxtImg
    src="/its-logo-black.png"
    format="webp"
    densities="x1"
    alt="IT Squarehub Logo"
    sizes="(max-width: 768px) 100px, (max-width: 1024px) 150px, 200px"
    class="w-auto h-auto"
  />
</NuxtLink>

  
        <!-- Menu Icon -->
        <button
          @click="toggleMenu"
          class="block sm:block md:hidden focus:outline-none"
        >
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="32" 
                height="32" 
                viewBox="0 0 24 24" 
                fill="black"
                >
                <rect y="4" width="24" height="2"/>
                <rect y="11" width="24" height="2"/>
                <rect y="18" width="24" height="2"/>
            </svg>
        </button>
        <ul
  :class="[ 
    'absolute top-16 left-0 w-full bg-white md:static md:flex md:justify-end md:space-x-6 md:top-auto md:left-auto md:w-auto', 
    menuOpen ? 'block' : 'hidden'
  ]"
  class="text-2xl p-6 md:text-xl md:p-0"
  style="width: 100%;"
>
  <li class="mb-8 md:mb-0">
    <NuxtLink
      to="/"
      @click="closeMenu"
      class="hover:underline underline-offset-8"
      exact-active-class="underline underline-offset-8"
    >
      Home
    </NuxtLink>
  </li>
  <li class="mb-8 md:mb-0">
    <NuxtLink
      to="/product"
      @click="closeMenu"
      class="hover:underline underline-offset-8"
      exact-active-class="underline underline-offset-8"
    >
      Product
    </NuxtLink>
  </li>
  <li class="mb-8 md:mb-0">
    <NuxtLink
      to="/contact"
      @click="closeMenu"
      class="hover:underline underline-offset-8"
      exact-active-class="underline underline-offset-8"
    >
      Contact Us
    </NuxtLink>
  </li>
</ul>

      </nav>
    </header>
  </template>
  
  <script>
  import { ref } from "vue";
  
  export default {
    setup() {
      const menuOpen = ref(false);
  
      const toggleMenu = () => {
        menuOpen.value = !menuOpen.value;
      };
  
      const closeMenu = () => {
        menuOpen.value = false;
      };
  
      return { menuOpen, toggleMenu, closeMenu };
    },
  };
  </script>