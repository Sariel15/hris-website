<template>
    <div>
        <h1 class="mt-10 text-center text-3xl sm:text-4xl md:text-5xl font-semibold">Discover, Create, Build</h1>
        <p class="mt-2 text-center text-lg sm:text-xl">
            Check out our HRIS System!
        </p>
        <button class="
            font-semibold
            mt-5 
            mx-auto block 
            border-2
            border-blue-green 
            text-black 
            px-4 sm:px-6 
            py-1.5 sm:py-2 
            rounded-3xl 
            hover:bg-blue-green 
            hover:text-white
            text-sm sm:text-base
            tracking-[.15em]">
            TRY OUR PRODUCT
        </button>

        <NuxtImg
            sizes="xs:100vw sm:1080px"
            src="/hero-pic-3.png"
            format="webp"
            densities="x1"
            alt="Hero Image"
            class="w-full h-auto max-w-screen-md mx-auto"/>
    </div>

    <div class="carousel-container bg-purple-lightC h-auto py-8 sm:py-16 overflow-hidden">
        <div class="carousel-track">
            <div
                v-for="(feature, index) in [...features, ...features]"
                :key="index"
                class="carousel-card bg-white shadow-lg rounded-3xl p-4 sm:p-8 mx-2 sm:mx-4 flex flex-col"
            >
                <h2 class="text-xl sm:text-2xl font-bold mb-2">{{ feature.title }}</h2>
                <p class="text-gray-600 text-sm sm:text-base">{{ feature.description }}</p>
                <div class="mt-auto border-2 p-2 sm:p-4 w-24 sm:w-32 h-24 sm:h-32 flex items-center justify-center">
                    <NuxtImg :src="feature.image" :alt="feature.title + ' Image'" format="webp"/>
                </div>
            </div>
        </div>
    </div>

    <div class="how-hris-works bg-white py-8 sm:py-16 px-4 sm:px-8">
        <h2 class="text-center text-4xl sm:text-5xl md:text-6xl font-bold mb-10 sm:mb-20">How HRIS works</h2>
        
        <div class="max-w-screen-xl mx-auto">
            <div class="flex flex-col justify-center md:flex-row gap-28 mb-16">
                <div class="w-full md:w-1/2">
                    <div class="bg-white rounded-3xl shadow-lg p-4 sm:p-8 flex items-center justify-center h-[200px] sm:h-[250px] w-full sm:w-[350px] mx-auto">
                        Short Video Demo
                    </div>
                </div>
                <div class="w-full md:w-1/2 flex flex-col justify-center">
                    <h3 class="text-3xl font-semibold mb-4">Easy to Login</h3>
                    <div class="relative">
                        <div class="h-0.5 w-[120%] bg-gray-300 mb-4 border-t border-black shadow-lg"></div>
                        <p class="text-gray-600">DESCRIPTION</p>
                    </div>
                </div>
            </div>

            <div class="flex flex-col justify-center md:flex-row-reverse gap-28 mb-16">
                <div class="w-full md:w-1/2">
                    <div class="bg-white rounded-3xl shadow-lg p-4 sm:p-8 flex items-center justify-center h-[200px] sm:h-[250px] w-full sm:w-[350px] mx-auto">
                        Short Video Demo
                    </div>
                </div>
                <div class="w-full md:w-1/2 flex flex-col justify-center">
                    <h3 class="text-3xl text-right font-semibold mb-4">Functions</h3>
                    <div class="relative">
                        <div class="h-0.5 w-[140%] bg-gray-300 mb-4 border-t border-black shadow-lg -ml-[40%]"></div>
                        <p class="text-gray-600 text-right">DESCRIPTION</p>
                    </div>
                </div>
            </div>

            <div class="flex flex-col justify-center md:flex-row gap-28 mb-16">
                <div class="w-full md:w-1/2">
                    <div class="bg-white rounded-3xl shadow-lg p-4 sm:p-8 flex items-center justify-center h-[200px] sm:h-[250px] w-full sm:w-[350px] mx-auto">
                        Short Video Demo
                    </div>
                </div>
                <div class="w-full md:w-1/2 flex flex-col justify-center">
                    <h3 class="text-3xl font-semibold mb-4">Sample Output</h3>
                    <div class="relative">
                        <div class="h-0.5 w-[120%] bg-gray-300 mb-4 border-t border-black shadow-lg"></div>
                        <p class="text-gray-600">DESCRIPTION</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <ContactFooter />
</template>

<style scoped>
.carousel-container {
    height: auto;
    min-height: 500px;
    @media (min-width: 640px) {
        height: 600px;
    }
    width: 100%;
    position: relative;
    overflow: hidden;
    background-color: #f4edff;
    clip-path: polygon(0 10%, 100% 0, 100% 85%, 0 100%);
    padding: 4rem 0;
}

.carousel-track {
    margin-top: 30px;
    display: flex;
    gap: 2rem;
    position: relative;
    animation: carousel 20s linear infinite;
    width: max-content;
}

.carousel-card {
    min-width: 260px;
    min-height: 320px;
    @media (min-width: 640px) {
        min-width: 320px;
        min-height: 380px;
    }
    flex-shrink: 0;
}

@keyframes carousel {
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(calc(-50% - 0.5rem));
    }
}

.carousel-track:hover {
    animation-play-state: paused;
}

.grid {
    display: grid;
    gap: 2rem;
}

@media (min-width: 768px) {
    .grid-cols-2 {
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>

<script setup lang="ts">
import { ref } from 'vue';

const features = ref([
    { title: 'Feature 1', description: 'DESCRIPTION', image: '/its-icon-3.png' },
    { title: 'Feature 2', description: 'DESCRIPTION', image: '/its-icon-3.png' },
    { title: 'Feature 3', description: 'DESCRIPTION', image: '/its-icon-3.png' },
    { title: 'Feature 4', description: 'DESCRIPTION', image: '/its-icon-3.png' },
    { title: 'Feature 5', description: 'DESCRIPTION', image: '/its-icon-3.png' },
    { title: 'Feature 6', description: 'DESCRIPTION', image: '/its-icon-3.png' },
    { title: 'Feature 7', description: 'DESCRIPTION', image: '/its-icon-3.png' },
]);
</script>