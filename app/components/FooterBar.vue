<template>
  <footer class="py-4 sm:py-6 md:py-8 lg:py-12 flex justify-center">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
        <div class="text-center md:text-left space-y-4 md:space-y-6">
          <NuxtImg
            sizes="xs:100vw sm:320px"
            src="/its-logo-black.png"
            format="webp"
            densities="x1"
            alt="IT Squarehub Logo"
            class="h-12 md:h-14 lg:h-16 mx-auto md:mx-0"/>
          <p class="text-base md:text-lg text-gray-700 max-w-md mx-auto md:mx-0">
            We provide world class services at a fraction of a cost without sacrificing quality.
          </p>
          <div class="flex justify-center md:justify-start space-x-4">
            <a v-for="social in ['envelope', 'facebook-f', 'twitter', 'linkedin-in']" 
               :key="social"
               href="#" 
               class="bg-yellow-500 p-3 md:p-4 rounded-full hover:bg-yellow-600 transition-all hover:scale-105">
              <i :class="`fa${social === 'envelope' ? 's' : 'b'} fa-${social} text-white text-sm md:text-base`"></i>
            </a>
          </div>
        </div>

        <!-- Services Section -->
        <div class="text-center md:text-left space-y-6">
          <div class="space-y-4">
            <h3 class="text-lg md:text-xl font-bold">Outsourcing Services</h3>
            <div class="grid grid-cols-2 gap-2 md:gap-3">
              <div v-for="service in outsourcingServices" :key="service" 
                   class="text-gray-700 hover:text-yellow-500 cursor-pointer text-sm md:text-base transition-all hover:translate-x-1">
                {{ service }}
              </div>
            </div>
          </div>
          
          <div class="space-y-4">
            <h3 class="text-lg md:text-xl font-bold">Other Services</h3>
            <div v-for="service in otherServices" :key="service"
                 class="text-gray-700 hover:text-yellow-500 cursor-pointer text-sm md:text-base transition-all hover:translate-x-1">
              {{ service }}
            </div>
          </div>
        </div>

        <!-- Contact Section -->
        <div class="text-center md:text-left space-y-6">
          <h3 class="text-lg md:text-xl font-bold">Contact and Follow us on:</h3>
          <div class="space-y-4 text-sm md:text-base">
            <a v-for="contact in contacts" 
               :key="contact.icon"
               :href="contact.href"
               class="flex items-center hover:text-yellow-500 transition-all justify-center md:justify-start group">
              <i :class="`${contact.icon} mr-3 text-gray-600 group-hover:text-yellow-500`"></i>
              <span class="text-gray-700 group-hover:text-yellow-500">{{ contact.text }}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterBar',
  setup() {
    const contacts = [
      { 
        icon: 'far fa-envelope',
        text: 'customercare@itsquarehub.com',
        href: 'mailto:customercare@itsquarehub.com'
      },
      {
        icon: 'fas fa-phone-alt',
        text: 'PH: +63 9060010784 (Globe)',
        href: 'tel:+639060010784'
      },
      {
        icon: 'fas fa-phone-alt',
        text: 'PH: +63 9218591348 (Smart)',
        href: 'tel:+639218591348'
      },
      {
        icon: 'fas fa-phone-alt',
        text: 'UK: +44 748 888-9923',
        href: 'tel:+447488889923'
      }
    ]

    const outsourcingServices = [
      'Software Development',
      'Web Development',
      'Mobile Development',
      'QA & Testing',
      'UI/UX Design',
      'DevOps Services',
      'Cloud Solutions',
      'IT Consulting'
    ]

    const otherServices = [
      'Staff Augmentation',
      'Project Management',
      'Technical Support',
      'Training & Development'
    ]

    return { 
      contacts,
      outsourcingServices,
      otherServices
    }
  }
}
</script>
