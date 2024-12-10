<template>
  <main>
  <section class="bg-[#00B8D4] bg-opacity-15">
    <div class="container flex flex-col lg:flex-row items-center py-[9rem] gap-10">
      <div class="flex-1 order-2 lg:order-1 text-center lg:text-left">
        <h1 class="text-4xl lg:text-6xl font-semibold mb-6 text-balance">
          Innovate Outsourcing with a Focus on Quality
        </h1>
        <p class="text-xl lg:text-2xl mb-8 text-balance">
          Embrace quality-driven strategies to transform your operation and achieve unparalleled success.
        </p>
        <button
          class="px-6 tracking-[.15em] py-2 border border-black text-black bg-transparent rounded-md text-lg cursor-pointer hover:bg-black hover:text-white transition">
          Browse Product
          </button>
      </div>
      <div class="flex-1 order-1 lg:order-2">
        <NuxtImg
          sizes="xs:100vw sm:667px"
          src="/hero-pic-1.png"
          format="webp"
          densities="x1"
          alt=""
        />
      </div>
    </div>
  </section>

  <section class="text-center py-24">
    <h2 class="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 lg:mb-6 tracking-tight mt-6 lg:mt-8 px-4">Why choose us for Outsourcing?</h2>
    <p class="text-black/80 mb-16 lg:mb-32 max-w-3xl mx-auto text-lg lg:text-3xl tracking-tight px-4">
      IT Squarehub is a leading outsourcing company with a proven track record of helping businesses and organizations successfully attain their business objectives. We take pride in delivering first class outsourcing services around the globe.
    </p>

    <div class="min-h-[40vh] relative">
      <div class="container mx-auto px-4">
        <div 
          class="h-screen flex justify-center items-center top-[20vh] left-0 w-full mt-[10vh] sm:mt-[15vh] lg:mt-[20vh]" 
          ref="cardContainer"
        >
          <div 
            v-for="(card, index) in cardsData"  
            :key="index"
            :class="[
              'absolute w-[180px] sm:w-[220px] md:w-[260px] lg:w-[280px] h-[160px] sm:h-[180px] md:h-[220px] lg:h-[240px] p-4 sm:p-6 lg:p-10 rounded-[24px] text-white cursor-pointer transition-all duration-700 ease-out',
              'after:content-[\'\'] after:absolute after:inset-0 after:rounded-[24px] after:shadow-lg after:-z-10',
            ]"
            :style="[
              `border: 3px solid ${card.color}; color: ${card.color}; background-color: white;`,
              cardStyles[index],
              `z-index: ${cardsData.length - index}`
            ]"
            :ref="el => setCardRef(el as HTMLElement, index)" 
          >
            <div class="flex items-center justify-center h-full">
              <NuxtImg 
                :src="card.image"
                sizes="xs:100vw sm:667px"
                format="webp"
                densities="x1"
                class="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 object-contain"
                :alt="`${card.title} Icon`"
              />
            </div>
            <h3 class="text-lg md:text-xl font-semibold text-center absolute bottom-3 lg:bottom-4 left-0 right-0 px-2">{{ card.title }}</h3>
          </div>
        </div>
      </div>
    </div>
  </section>

  <ContactFooter />
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const cardsData = ref([
  {
    title: 'Innovative Outsourcing',
    color: '#9333EA',
    image: '/bulb.png'
  },
  {
    title: 'Dedicated Team',
    color: '#2563EB',
    image: '/people.png'
  },
  {
    title: 'Scalable and Flexible',
    color: '#EAB308',
    image: '/message.png'
  },
  {
    title: 'Cost Efficient',
    color: '#06B6D4',
    image: '/clock.png'
  }
]);

const cardContainer = ref<HTMLElement | null>(null);
const cardRefs = ref<HTMLElement[]>([]);
const cardStyles = ref<Array<{ [key: string]: string | number }>>([]);

// Initialize card styles with slight offset for stacked appearance
cardStyles.value = cardsData.value.map((_, index) => ({
  transform: `translateX(${index * 20}px)`, // Each card is offset 20px to the right
  opacity: 1,
  transition: 'transform 0.1s ease-out',
  zIndex: cardsData.value.length - index
}));

const setCardRef = (el: HTMLElement | null, index: number) => {
  if (el) cardRefs.value[index] = el;
};

onMounted(() => {
  const updateCards = () => {
    if (!cardContainer.value || !cardRefs.value) return;
    
    const containerRect = cardContainer.value.getBoundingClientRect();
    const triggerPoint = window.innerHeight * 1.2;
    
    const scrollProgress = containerRect.top < triggerPoint 
      ? Math.min(Math.max((triggerPoint - containerRect.top) / (triggerPoint * 0.5), 0), 1)
      : 0;
    
    const positions = [
      { x: -450, y: 0 },
      { x: -150, y: 0 },
      { x: 150, y: 0 },
      { x: 450, y: 0 }
    ];

    // Scale down positions based on screen width
    let scaleFactor = 0.35; // Default for mobile

    if (window.innerWidth < 640) { // Mobile
      scaleFactor = 0.35;
    } else if (window.innerWidth < 768) { // sm
      scaleFactor = 0.5;
    } else if (window.innerWidth < 1024) { // md
      scaleFactor = 0.75;
    } else { // lg and above
      scaleFactor = 1;
    }

    // Apply scale factor to positions
    positions.forEach((pos, i) => {
      if (positions[i]) {
        positions[i].x *= scaleFactor;
      }
    });

    cardRefs.value.forEach((card, index) => {
      if (!card || !positions[index]) return;
      
      // Calculate final position with smoother transition
      const targetX = (positions[index]?.x ?? 0) * scrollProgress + (index * 10 * (1 - scrollProgress));
      
      cardStyles.value[index] = {
        transform: `translateX(${targetX}px)`,
        opacity: 1,
        transition: 'transform 0.4s ease-out',
        zIndex: scrollProgress < 0.1 ? cardsData.value.length - index : 1
      };
    });
  };

  const scrollHandler = () => {
    window.requestAnimationFrame(updateCards);
  };

  window.addEventListener('scroll', scrollHandler);
  updateCards();

  onUnmounted(() => {
    window.removeEventListener('scroll', scrollHandler);
  });
});
</script>


