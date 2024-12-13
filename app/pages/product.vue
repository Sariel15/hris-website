<template>
     <div class="px-4 sm:px-6 lg:px-8"> <!-- Added padding container -->
        <h1 class="mt-10 text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
            Discover, Create, Build
        </h1>
        <p class="mt-2 text-center text-base sm:text-lg md:text-xl">
            Check out our HRIS System!
        </p>
        <button class="
            font-semibold
            mt-5 
            mx-auto block z
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

    <div class="how-hris-works bg-white py-6 sm:py-8 md:py-10 lg:py-16 px-4 md:px-6 lg:px-8">
        <h2 class="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 sm:mb-12 md:mb-16 lg:mb-20">
            How HRIS works
        </h2>
        
        <div class="max-w-screen-xl mx-auto">
            <div class="flex flex-col justify-center lg:flex-row gap-28 mb-16">
                <div class="w-full md:w-1/2">
                    <div class="bg-white rounded-3xl shadow-lg p-4 sm:p-8 flex items-center justify-center h-[400px] sm:h-[500px] w-full sm:w-[600px] mx-auto">
                        Short Video Demo
                    </div>
                </div>
                <div class="w-full md:w-1/2 flex flex-col justify-center">
                    <h3 class="text-3xl font-semibold mb-4 md:text-left text-center">Easy to Login</h3>
                    <div class="relative">
                        <div class="h-0.5 w-[100%] bg-gray-300 mb-4 border-t border-black shadow-lg"></div>
                        <p class="text-gray-600 md:text-left text-center">DESCRIPTION</p>
                    </div>
                </div>
            </div>

            <div class="flex flex-col justify-center lg:flex-row-reverse gap-28 mb-16">
                <div class="w-full md:w-1/2">
                    <div class="bg-white rounded-3xl shadow-lg p-4 sm:p-8 flex items-center justify-center h-[400px] sm:h-[500px] w-full sm:w-[600px] mx-auto">
                        Short Video Demo
                    </div>
                </div>
                <div class="w-full md:w-1/2 flex flex-col justify-center">
                    <h3 class="text-3xl font-semibold mb-4 md:text-right text-center">Functions</h3>
                    <div class="relative">
                        <div class="h-0.5 w-[100%] bg-gray-300 mb-4 border-t border-black shadow-lg ml-auto"></div>
                        <p class="text-gray-600 md:text-right text-center">DESCRIPTION</p>
                    </div>
                </div>
            </div>

            <div class="flex flex-col justify-center lg:flex-row gap-28 mb-16">
                <div class="w-full md:w-1/2">
                    <div class="bg-white rounded-3xl shadow-lg p-4 sm:p-8 flex items-center justify-center h-[400px] sm:h-[500px] w-full sm:w-[600px] mx-auto">
                        Short Video Demo
                    </div>
                </div>
                <div class="w-full md:w-1/2 flex flex-col justify-center">
                    <h3 class="text-3xl font-semibold mb-4 md:text-left text-center">Sample Output</h3>
                    <div class="relative">
                        <div class="h-0.5 w-[100%] bg-gray-300 mb-4 border-t border-black shadow-lg"></div>
                        <p class="text-gray-600 md:text-left text-center">DESCRIPTION</p>
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
    min-height: 300px;
    width: 100%;
    position: relative;
    overflow-x: auto;
    overflow-y: hidden;
    background-color: #f4edff;
    padding: 1rem 0;
    
    @media (max-width: 425px) {
        clip-path: none;
        padding: 2rem 0;
    }

    @media (min-width: 426px) {
        min-height: 600px;
        overflow: hidden;
        clip-path: polygon(0 10%, 100% 0, 100% 85%, 0 100%);
        padding: 4rem 0;
    }
}

.carousel-track {
    display: flex;
    position: relative;
    width: max-content;

    @media (max-width: 425px) {
        margin-top: 10px;
        gap: 1rem;
        padding: 0 1rem;
        animation: carousel 20s linear infinite;
    }

    @media (min-width: 426px) {
        margin-top: 30px;
        gap: 2rem;
        animation: carousel 20s linear infinite;
    }
}

.carousel-card {
    @media (max-width: 425px) {
        min-width: 280px;
        min-height: 220px;
        margin-right: 1rem;
    }

    @media (min-width: 426px) {
        min-width: 320px;
        min-height: 380px;
    }
    flex-shrink: 0;
}

/* Hide scrollbar but keep functionality */
.carousel-container::-webkit-scrollbar {
    display: none;
}

.carousel-container {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
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