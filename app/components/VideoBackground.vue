<template>
  <div class="relative h-screen w-full overflow-hidden">
    <video
      autoplay
      loop
      muted
      playsinline
      class="absolute top-0 left-0 w-full h-full object-cover"
    >
      <source src="/tech-sample-vid-1.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <div class="absolute inset-0 z-10 flex flex-col lg:flex-row items-center py-20 gap-10 bg-black bg-opacity-70 text-white">
      <div class="w-full min-h-screen flex items-center justify-center bg-black bg-opacity-40 text-white">
          <div class="text-center px-6 lg:px-16">
              <h1 class="text-4xl lg:text-6xl font-extrabold mb-4 lg:mb-6 text-balance">
                  Innovate Outsourcing with a Focus on Quality
              </h1>
              <p class="text-lg lg:text-2xl mb-6 lg:mb-8 text-balance">
                  Embrace quality-driven strategies to transform your <br />operation and achieve unparalleled success.
              </p>
              <button
                  class="px-6 py-3 border border-white text-white bg-transparent rounded-md text-lg cursor-pointer hover:bg-white hover:text-black transition">
                  Browse Products
              </button>
          </div>
      </div>
    </div>
  </div>
</template>