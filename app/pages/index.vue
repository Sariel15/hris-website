<template>
  <main>
  <section class="bg-[#00B8D4] bg-opacity-15">
    <div class="container flex flex-col lg:flex-row items-center py-20 gap-10">
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

  <section>
    <section class="text-center py-16">
      <h2 class="text-5xl font-bold mb-4">Why choose us for Outsourcing?</h2>
      <p class="text-black mb-10 max-w-2xl mx-auto">
          IT Squarehub is a leading outsourcing company with a proven track record of helping businesses and organizations successfully attain their business objectives. We take pride in delivering first class outsourcing services around the globe.
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 medium:gap-5 sm:w-[75%] medium:w-[80%] mx-auto max-w-6xl">
        <div class="flex flex-col items-center">
          <div class="border-[3px] border-purple-ITS rounded-[24px] p-8 mb-4 bg-white w-[240px] h-[200px] flex items-center justify-center">
              <NuxtImg
                sizes="xs:100vw sm:667px"
                src="/bulb.png" 
                format="webp"
                densities="x1"
                class=""
                alt="Innovative Outsourcing Icon" 
              />
          </div>
          <h3 class="text-xl font-semibold text-center">Innovative<br>Outsourcing</h3>
        </div>

        <div class="flex flex-col items-center">
          <div class="border-[3px] border-blue-ITS rounded-[24px] p-8 mb-4 bg-white w-[240px] h-[200px] flex items-center justify-center">
              <NuxtImg 
                sizes="xs:100vw sm:667px"
                src="/people.png" 
                format="webp"
                densities="x1"
                class=""
                alt="Dedicated Team Icon" 
              />
          </div>
          <h3 class="text-xl font-semibold text-center">Dedicated Team</h3>
        </div>
        
        <div class="flex flex-col items-center">
          <div class="border-[3px] border-yellow-ITS rounded-[24px] p-8 mb-4 bg-white w-[240px] h-[200px] flex items-center justify-center">
              <NuxtImg 
                src="/message.png" 
                sizes="xs:100vw sm:667px"
                format="webp"
                densities="x1"
                class=""
                alt="Scalable and Flexible Icon" 
              />
          </div>
          <h3 class="text-xl font-semibold text-center">Scalable and<br>Flexible</h3>
        </div>

        <div class="flex flex-col items-center">
          <div class="border-[3px] border-cyan-ITS rounded-[24px] p-8 mb-4 bg-white w-[240px] h-[200px] flex items-center justify-center">
              <NuxtImg 
                src="/clock.png" 
                sizes="xs:100vw sm:667px"
                format="webp"
                densities="x1"
                class="w-16 h-16 object-contain" 
                alt="Cost Efficient Icon" 
              />
          </div>
          <h3 class="text-xl font-semibold text-center">Cost Efficient</h3>
        </div>
      </div>
    </section>
  </section>

  <ContactFooter />
  </main>
</template>

<script setup lang="ts">

</script>
