<template>
    <section class="w-full">
        <div class="relative w-full min-h-[150px] 2xs:min-h-[180px] xs:min-h-[220px] sm:min-h-[280px] md:min-h-[350px] lg:min-h-[450px]
            bg-cover bg-center bg-no-repeat overflow-hidden"
            style="background-image: url('/banner.png')">
            <div class="absolute inset-0 flex flex-col items-center justify-center text-center 
                space-y-2 2xs:space-y-3 xs:space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8 
                p-2 2xs:p-3 xs:p-4 sm:p-5 md:p-6 lg:p-8">
                <h1 class="text-white text-sm 2xs:text-base xs:text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 
                    font-extrabold max-w-[98%] xs:max-w-[95%] sm:max-w-[90%] md:max-w-[85%] lg:max-w-[80%] 
                    leading-snug">
                    Find your dream job at IT Squarehub
                </h1>
                <p class="text-white/90 text-3xs 2xs:text-2xs xs:text-xs sm:text-sm md:text-base lg:text-xl 
                    max-w-[98%] xs:max-w-[95%] sm:max-w-[90%] md:max-w-[85%] lg:max-w-[80%] 
                    leading-relaxed">
                    Join us and explore exciting career opportunities with the best team.
                </p>
                <NuxtLink to="/contact#contact-form" 
                    class="mt-2 2xs:mt-2.5 xs:mt-3 sm:mt-4 
                    px-2.5 2xs:px-3 xs:px-4 sm:px-5 md:px-6 lg:px-8 
                    py-1 2xs:py-1.5 xs:py-2 sm:py-2.5 md:py-3 
                    bg-white text-black 
                    text-3xs 2xs:text-2xs xs:text-xs sm:text-sm md:text-base 
                    font-bold rounded sm:rounded-md md:rounded-lg 
                    hover:bg-[#00B8D4] hover:text-white 
                    hover:scale-105 active:scale-95 
                    transform transition-all duration-300
                    shadow hover:shadow-lg">
                    Contact Us
                </NuxtLink>
            </div>
        </div>
    </section>
</template>

<style scoped>
@media (max-width: 425px) {
    .text-3xs {
        font-size: 0.55rem;
        line-height: 0.9rem;
    }
    .text-2xs {
        font-size: 0.65rem;
        line-height: 1rem;
    }
}

@media (max-width: 320px) {
    .text-3xs {
        font-size: 0.45rem;
        line-height: 0.8rem;
    }
    .text-2xs {
        font-size: 0.55rem;
        line-height: 0.9rem;
    }
}
</style>