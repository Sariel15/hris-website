<template>
  <footer class="bg-white py-8 flex justify-center">
    <div class="container mx-auto px-4 max-w-7xl">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-20">
        <div>
            <NuxtImg
                    sizes="xs:100vw sm:320px"
                    src="/its-logo-black.png"
                    format="webp"
                    densities="x1"
                    alt="IT Squarehub Logo"
                    class="h-16 mb-4"/>
          <p class="text-xl text-black pl-4 mt-6 mb-6 w-[370px]">
            We provide world class services at a fraction of a cost without sacrificing quality.
          </p>
          <div class="flex pl-6 space-x-6">
            <a href="#" class="bg-yellow-500 p-6 rounded-full">
              <i class="fas fa-envelope text-white"></i>
            </a>
            <a href="#" class="bg-yellow-500 p-6 rounded-full">
              <i class="fab fa-facebook-f text-white"></i>
            </a>
            <a href="#" class="bg-yellow-500 p-6 rounded-full">
              <i class="fab fa-twitter text-white"></i>
            </a>
            <a href="#" class="bg-yellow-500 p-6 rounded-full">
              <i class="fab fa-linkedin-in text-white"></i>
            </a>
          </div>
        </div>

        <!-- Outsourcing Services -->
        <div>
          <h3 class="text-xl font-bold mb-4">Outsourcing Services</h3>
          <div class="grid grid-cols-2 gap-2">
            <div v-for="i in 8" :key="i" class="text-gray-700 hover:text-yellow-500 cursor-pointer">
              Software Engineer
            </div>
          </div>
          
          <h3 class="text-xl font-bold mb-4 mt-6">Other Services</h3>
          <div class="text-gray-700 hover:text-yellow-500 cursor-pointer">
            Software Engineer
          </div>
        </div>

        <!-- Contact Information -->
        <div>
          <h3 class="text-xl font-bold mb-4">Contact and Follow us on:</h3>
          <div class="space-y-3">
            <div class="flex items-center hover:text-yellow-500">
              <i class="far fa-envelope mr-2"></i>
              <a href="mailto:customercare@itsquarehub.com" class="text-gray-700">
                customercare@itsquarehub.com
              </a>
            </div>
            <div class="flex items-center">
              <i class="fas fa-phone-alt mr-2"></i>
              <span class="text-gray-700">PH: +63 9060010784 (Globe)</span>
            </div>
            <div class="flex items-center">
              <i class="fas fa-phone-alt mr-2"></i>
              <span class="text-gray-700">PH: +63 9218591348 (Smart)</span>
            </div>
            <div class="flex items-center">
              <i class="fas fa-phone-alt mr-2"></i>
              <span class="text-gray-700">UK: +44 748 888-9923</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterBar'
}
</script>
