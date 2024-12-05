<template>
    <header class="py-4">
        <nav class="flex">
            <NuxtLink to="/" class="flex gap-1 items-center">
                <NuxtImg w-60 ml-20
                    
                    src="/its-logo-black.png"
                    format="webp"
                    densities="x1"
                    alt="IT Squarehub Logo"
                    class="w-60 ml-20" />
            </NuxtLink>
            <ul class="flex flex-1 justify-end mr-20 gap-6 text-xl ">
                <li>
                <NuxtLink to="/">Home</NuxtLink>
                </li>
                <li>
                <NuxtLink to="/product">Product</NuxtLink>
                </li>
                <li>
                <NuxtLink to="/contact">Contact Us</NuxtLink>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script setup lang="ts">

</script>