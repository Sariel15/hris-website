<template>
    <section>
        <div class="relative w-full h-[500px] bg-cover bg-center bg-no-repeat"
            style="background-image: url('/banner.png')">
            <div class="absolute inset-0 flex flex-col items-center justify-center text-center space-y-4 px-4">
                <h1 class="text-white text-3xl lg:text-5xl font-extrabold">
                    Find your dream job at IT Squarehub
                </h1>
                <p class="text-white text-lg lg:text-xl">
                    Join us and explore exciting career opportunities with the best team.
                </p>
                <NuxtLink to="/contact" class="px-6 py-2 bg-white text-black font-bold rounded-lg hover:bg-[#00B8D4] transition duration-300">
                    Contact Us
                </NuxtLink>
            </div>
        </div>
    </section>
</template>