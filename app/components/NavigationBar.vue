<template>
    <header class="py-4 border-b border-gray-200 shadow-md">
        <nav class="flex">
            <NuxtLink to="/" class="flex gap-1 items-center">
                <NuxtImg
                    sizes="xs:100vw sm:280px"
                    src="/its-logo-black.png"
                    format="webp"
                    densities="x1"
                    alt="IT Squarehub Logo"
                    class="ml-20"/>
            </NuxtLink>
            <ul class="flex flex-1 justify-end mr-20 gap-6 text-xl ">
                <li>
                <NuxtLink to="/" exact-active-class="underline underline-offset-4"">Home</NuxtLink>
                </li>
                <li>    
                <NuxtLink to="/product" exact-active-class="underline underline-offset-4">Product</NuxtLink>
                </li>
                <li>
                <NuxtLink to="/contact" exact-active-class="underline underline-offset-4">Contact Us</NuxtLink>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script setup lang="ts">

</script>