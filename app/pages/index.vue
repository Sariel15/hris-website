<template>
  <main>
  <section class="bg-[#00B8D4] bg-opacity-15">
    <div class="container flex flex-col lg:flex-row items-center py-20 gap-10">
      <div class="flex-1 order-2 lg:order-1 text-center lg:text-left">
        <h1 class="text-4xl lg:text-6xl font-extrabold mb-6 text-balance">
          Innovate Outsourcing with a Focus on Quality
        </h1>
        <p class="text-xl lg:text-2xl mb-8 text-balance">
          Embrace quality-driven strategies to transform your operation and achieve unparalleled success.
        </p>
        <button
          class="px-4 py-2 border border-black text-black bg-transparent rounded-md text-lg cursor-pointer hover:bg-black hover:text-white transition">
          Browse Products
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
  <!-- WHY CHOOSE US FOR OUTSOURCING -->
  <section>
      <section class="text-center py-16">
  <h2 class="text-5xl font-bold mb-4">Why choose us for Outsourcing?</h2>
  <p class="text-black mb-10 max-w-2xl mx-auto">
      IT Squarehub is a leading outsourcing company with a proven track record of helping businesses and organizations successfully attain their business objectives. We take pride in delivering first class outsourcing services around the globe.
  </p>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto max-w-5xl">
    <!-- Card 1 -->
    <div class="flex flex-col items-center border-2 border-purple-500 rounded-lg p-6">
      <div class="w-16 h-16 flex items-center justify-center bg-purple-100 text-purple-500 rounded-full mb-4">
        <!-- Icon: Replace with SVG or FontAwesome if necessary -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          class="w-8 h-8"
          viewBox="0 0 24 24"
        >
          <path d="M12 2a7 7 0 0 1 7 7c0 3.94-3.05 7-7 7a7 7 0 1 1 0-14zm-.5 10H9a.5.5 0 0 1 0-1h2.5V8.5a.5.5 0 0 1 1 0V11h2.5a.5.5 0 0 1 0 1h-2.5v2.5a.5.5 0 0 1-1 0V12z" />
        </svg>
      </div>
      <h3 class="text-lg font-semibold mb-2">Innovative Outsourcing</h3>
    </div>

    <!-- Card 2 -->
    <div class="flex flex-col items-center border-2 border-blue-500 rounded-lg p-6">
      <div class="w-16 h-16 flex items-center justify-center bg-blue-100 text-blue-500 rounded-full mb-4">
        <!-- Icon -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          class="w-8 h-8"
          viewBox="0 0 24 24"
        >
          <path d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20zm-4 9a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
        </svg>
      </div>
      <h3 class="text-lg font-semibold mb-2">Dedicated Team</h3>
    </div>

    <!-- Card 3 -->
    <div class="flex flex-col items-center border-2 border-yellow-500 rounded-lg p-6">
      <div class="w-16 h-16 flex items-center justify-center bg-yellow-100 text-yellow-500 rounded-full mb-4">
        <!-- Icon -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          class="w-8 h-8"
          viewBox="0 0 24 24"
        >
          <path d="M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm1 2v10h14V7H5z" />
        </svg>
      </div>
      <h3 class="text-lg font-semibold mb-2">Scalable and Flexible</h3>
    </div>

    <!-- Card 4 -->
    <div class="flex flex-col items-center border-2 border-teal-500 rounded-lg p-6">
      <div class="w-16 h-16 flex items-center justify-center bg-teal-100 text-teal-500 rounded-full mb-4">
        <!-- Icon -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          class="w-8 h-8"
          viewBox="0 0 24 24"
        >
          <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm-1-10H7a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2zm6 0h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2z" />
        </svg>
      </div>
      <h3 class="text-lg font-semibold mb-2">Cost Efficient</h3>
    </div>
  </div>
</section>
  </section>
  <!-- Banner -->
  <section>
      <div
class="relative w-full h-[500px] bg-cover bg-center bg-no-repeat"
style="background-image: url('/banner.png')"
>
<!-- Text Overlay -->
<div class="absolute inset-0 flex flex-col items-center justify-center text-center space-y-4 px-4">
  <!-- Heading -->
  <h1 class="text-white text-3xl lg:text-5xl font-extrabold">
    Find your dream job at IT Squarehub
  </h1>
  <!-- Subheading -->
  <p class="text-white text-lg lg:text-xl">
    Join us and explore exciting career opportunities with the best team.
  </p>
  <!-- Button -->
  <button class="px-6 py-2 bg-white text-black font-bold rounded-lg hover:bg-[#00B8D4] transition duration-300">
    Contact Us
  </button>
</div>
</div>

  </section>
  </main>
</template>

<script setup lang="ts">

</script>
