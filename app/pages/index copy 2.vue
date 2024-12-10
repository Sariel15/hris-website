<template>
  <main>
    <section>
      <VideoBackground />
    </section>

  <section class="min-h-[300vh] relative">
    <div class="container mx-auto px-4">
      <div 
        class="h-screen flex justify-center items-center sticky top-[200px] left-0 w-full mt-[90vh]" 
        ref="cardContainer"
      >
        <div 
          v-for="(card, index) in cardsData"  
          :key="index"
          :class="[
            'absolute w-[300px] h-[250px] p-10 rounded-2xl text-white cursor-pointer transition-all duration-700 ease-out',
            'after:content-[\'\'] after:absolute after:inset-0 after:rounded-2xl after:shadow-lg after:-z-10',
          ]"
          :style="[
            `border: 3px solid ${card.color}; color: ${card.color}; background-color: white;`,
            cardStyles[index],
            `z-index: ${cardsData.length - index}`
          ]"
          :ref="el => setCardRef(el as HTMLElement, index)" 
        >
          <div class="text-center mb-4">
            <NuxtImg 
              :src="card.image"
              sizes="xs:100vw sm:667px"
              format="webp"
              densities="x1"
              class="w-16 h-16 object-contain mx-auto"
              :alt="`${card.title} Icon`"
            />
          </div>
          <h2 class="text-2xl font-bold mb-4 text-center">{{ card.title }}</h2>          

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
    color: '#9333EA', // purple
    image: '/bulb.png'
  },
  {
    title: 'Dedicated Team',
    color: '#2563EB', // blue
    image: '/people.png'
  },
  {
    title: 'Scalable and Flexible',
    color: '#EAB308', // yellow
    image: '/message.png'
  },
  {
    title: 'Cost Efficient',
    color: '#06B6D4', // cyan
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
  zIndex: cardsData.value.length - index // Fix reference to cardsData
}));

const setCardRef = (el: HTMLElement | null, index: number) => {
  if (el) cardRefs.value[index] = el;
};

onMounted(() => {
  const updateCards = () => {
    if (!cardContainer.value || !cardRefs.value) return;
    
    const containerRect = cardContainer.value.getBoundingClientRect();
    const triggerPoint = window.innerHeight * 0.8;
    
    const scrollProgress = containerRect.top < triggerPoint 
      ? Math.min(Math.max((triggerPoint - containerRect.top) / (triggerPoint * 0.5), 0), 1)
      : 0;
    
    cardRefs.value.forEach((card, index) => {
      if (!card) return;
      
      const positions = [
        { x: -600, y: 0 },
        { x: -200, y: 0 },
        { x: 200, y: 0 },
        { x: 600, y: 0 }
      ];
      
      // Calculate final position including initial offset
      const targetX = (positions[index].x * scrollProgress) + (index * 20 * (1 - scrollProgress));
      
      cardStyles.value[index] = {
        transform: `translateX(${targetX}px)`,
        opacity: 1,
        transition: 'transform 0.4s ease-out',
        zIndex: scrollProgress < 0.1 ? cardsData.value.length - index : 1
      };
    });
  };

  // Fix event listener setup
  const scrollHandler = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateCards();
        ticking = false;
      });
      ticking = true;
    }
  };

  let ticking = false;
  window.addEventListener('scroll', scrollHandler);
  
  updateCards();

  // Fix cleanup
  onUnmounted(() => {
    window.removeEventListener('scroll', scrollHandler);
  });
});
</script>


