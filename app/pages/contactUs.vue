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

    <!-- Centered Image -->
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

        <!-- Button -->
        <div class="flex justify-center">
      <button class="px-6 py-3 rounded-xl bg-[#00B8D4] text-white font-bold hover:bg-[#009bb3] transition duration-300">
        Get Started
      </button>
    </div>
  </section>
  <!-- Forms -->

  <section class="container py-20 px-6">
      <div class="flex flex-col lg:flex-row items-center">
        <!-- Text Section -->
        <div class="lg:w-1/2 mb-8 lg:mb-0 lg:pr-12">
          <h1 class="text-5xl font-bold text-[#034796] mb-20 leading-relaxed">
  We can't wait to hear from you join the ITS Family
</h1>

          <p class="text-lg text-gray-700 mb-6">
            Our development experts will provide you with a comprehensive guide on our next generation
            outsourcing that will help your business grow.
          </p>
          <p class="text-lg text-gray-700">
            Get in touch now to unlock the benefits of having a well-qualified offshore team while keeping your costs to a minimum.
          </p>
        </div>

        <!-- Form Section -->
        <div class="w-full lg:w-2/3 xl:w-1/2 bg-white p-8 rounded-lg shadow-2xl">
  <form @submit.prevent="handleSubmit">
    <div class="mb-4">
      <label for="fullName" class="block text-lg font-semibold">Full Name</label>
      <input
        type="text"
        id="fullName"
        class="w-full p-3 border border-gray-300 rounded-lg"
        placeholder="Full Name"
        v-model="form.fullName"
      />
    </div>
    <div class="mb-4">
      <label for="email" class="block text-lg font-semibold">Email</label>
      <input
        type="email"
        id="email"
        class="w-full p-3 border border-gray-300 rounded-lg"
        placeholder="Email"
        v-model="form.email"
      />
    </div>
    <div class="mb-4">
      <label for="phone" class="block text-lg font-semibold">Contact Number</label>
      <input
        type="number"
        id="phone"
        class="w-full p-3 border border-gray-300 rounded-lg"
        placeholder="Contact Number"
        v-model="form.phone"
      />
    </div>
    <div class="mb-4">
      <label for="company" class="block text-lg font-semibold">Company</label>
      <input
        type="text"
        id="company"
        class="w-full p-3 border border-gray-300 rounded-lg"
        placeholder="Company"
        v-model="form.company"
      />
    </div>
    <div class="mb-4">
      <label for="employees" class="block text-lg font-semibold">No. of Employees</label>
      <input
        type="number"
        id="employees"
        class="w-full p-3 border border-gray-300 rounded-lg"
        placeholder="No. of Employees"
        v-model="form.employees"
      />
    </div>
    <div class="mb-4">
      <label for="help" class="block text-lg font-semibold">How can we help?</label>
      <textarea
        id="help"
        class="w-full p-3 border border-gray-300 rounded-lg"
        rows="4"
        placeholder="How can we help?"
        v-model="form.help"
      ></textarea>
    </div>
    <div class="flex justify-end">
      <button
        type="submit"
        class="bg-[#034796] text-white py-3 px-6 rounded-lg hover:bg-[#3d86d9] transition duration-300"
      >
        Submit
      </button>
    </div>
  </form>
</div>

      </div>
    </section>
</main>

</template>