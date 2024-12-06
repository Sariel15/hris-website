<script>
  export default {
    data() {
      return {
        form: {
          fullName: '',
          email: '',
          phone:'',
          company: '',
          employees: '',
          help: ''
        }
      };
    },
    methods: {
      handleSubmit() {
        // Handle form submission logic here
        console.log(this.form);
      }
    }
  };
</script>

<template>
<main>
  <section class="container py-20 text-center">
    <h1 class="text-5xl font-extrabold mb-6 text-balance">Connect with Us to Build Your Success Story</h1>
    <p class="text-xl mb-6 text-balance max-w-screen-lg mx-auto">
      IT Squarehub combines the best practices and strategies to help you achieve your company objectives.
    </p>

    <div class="flex justify-center">
      <NuxtImg
        sizes="xs:100vw sm:1080px"
        src="/hero-pic-2.png"
        format="webp"
        densities="x1"
        alt="Hero Image"
        class="w-full h-auto max-w-screen-md"
      />
    </div>

    <div class="flex justify-center">
      <button class="px-10 py-3 rounded-xl tracking-[.10em] bg-[#00B8D4] text-white font-montserrat hover:bg-[#009bb3] transition duration-300">
        Get In Touch
      </button>
    </div>
  </section>

  <div class="flex justify-center bg-gray-50">
    <div class="w-1/2 p-20">
      <h1 class="text-[#034796] text-[70px] font-semibold leading-[1.2] mb-8 pt-6">
        We can't wait<br>
        to hear from you
      </h1>
      
      <p class="text-gray-600 text-2xl mb-6 leading-relaxed max-w-2xl">
        Our development experts will provide you with a comprehensive guide on our next generation outsourcing that will help your business grow.
      </p>
      
      <p class="text-gray-600 text-2xl leading-relaxed max-w-2xl">
        Get in touch now to unlock the benefits of having a well-qualified offshore team while keeping your costs to a minimum.
      </p>
    </div>

    <div class="w-1/2 p-20">
      <div class="bg-white rounded-[16px] shadow-[0_8px_40px_-12px_rgba(0,0,0,0.3)] p-12">
        <form @submit.prevent="handleSubmit">
          <div class="grid grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Full Name"
              v-model="form.fullName"
              class="w-full p-3 border border-gray-200 rounded-lg bg-gray-100"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              v-model="form.phone"
              class="w-full p-3 border border-gray-200 rounded-lg bg-gray-100"
            />
          </div>
          
          <div class="mb-4">
            <input
              type="email"
              placeholder="Email"
              v-model="form.email"
              class="w-[100%] p-3 border border-gray-200 rounded-lg bg-gray-100"
            />
          </div>
          
          <div class="grid grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Company"
              v-model="form.company"
              class="w-full p-3 border border-gray-200 rounded-lg bg-gray-100"
            />
            <input
              type="number"
              placeholder="No. of Employees"
              v-model="form.employees"
              class="w-full p-3 border border-gray-200 rounded-lg bg-gray-100"
            />
          </div>
          
          <div class="mb-6">
            <textarea
              placeholder="How can we help?"
              v-model="form.help"
              rows="4"
              class="w-[100%] p-3 border border-gray-200 rounded-lg bg-gray-100 resize-none"
            ></textarea>
          </div>
          
          <div class="text-center">
            <button
              type="submit"
              class="bg-[#034796] text-white px-12 py-3 rounded-lg font-medium hover:bg-[#023670] transition-colors"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</main>
</template>