<template>
  <!-- form wrapper -->
  <div class="container py-16">
    <div class="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
      <h2 class="text-2xl uppercase font-medium mb-1">create an acocunt</h2>
      <p class="text-gray-600 mb-6 text-sm">Register here if you don't have account</p>
      <form @submit.prevent="handleSubmit">
        <div class="space-y-4">
          <div>
            <label class="text-gray-600 mb-2 block"> User Name <span class="text-primary">*</span> </label>
            <!-- Sử dụng v-model để liên kết ref và input -->
            <input type="text" class="input-box w-full" placeholder="John Doe" required v-model="username" />
          </div>
          <div>
            <label class="text-gray-600 mb-2 block"> Email Address <span class="text-primary">*</span> </label>
            <input type="email" class="input-box w-full" placeholder="example@mail.com" required v-model="email" />
          </div>
          <div>
            <label class="text-gray-600 mb-2 block">Password <span class="text-primary">*</span></label>
            <input type="password" class="input-box w-full" placeholder="type password" required v-model="password" />
          </div>
        </div>
        <div class="flex items-center mt-6">
          <input type="checkbox" id="agreement" class="text-primary focus:ring-0 rounded-sm cursor-pointer" />
          <label for="agreement" class="text-gray-600 ml-3 cursor-pointer">
            I have read and agree to the
            <RouterLink to="/terms" class="text-primary">terms &amp; conditions</RouterLink>
          </label>
        </div>
        <div class="mt-4">
          <button
            type="submit"
            class="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
          >
            create account
          </button>
        </div>
      </form>
      <!-- login with social -->
      <div class="mt-6 flex justify-center relative">
        <div class="absolute left-0 top-3 w-full border-b-2 border-gray-200"></div>
        <div class="text-gray-600 uppercase px-3 bg-white relative z-10">OR SINGUP IN WITH</div>
      </div>
      <div class="mt-4 flex gap-4">
        <a
          href="#"
          class="block w-1/2 py-2 text-center text-white bg-blue-800 rounded uppercase font-roboto font-medium text-sm"
        >
          Facebook
        </a>
        <a
          href="#"
          class="block w-1/2 py-2 text-center text-white bg-yellow-600 rounded uppercase font-roboto font-medium text-sm"
        >
          Google
        </a>
      </div>
      <!-- login with social end -->
      <p class="mt-4 text-gray-600 text-center">
        Already have an account?
        <RouterLink to="/login" class="text-primary">Login Now</RouterLink>
      </p>
    </div>
  </div>
  <!-- form wrapper end -->
</template>

<script setup lang="ts">
import AuthAPI from '@/api/auth.api'
import router from '@/router'
import axios from 'axios'
import { ref } from 'vue'
// validate form using VeeValidate ...
// https://vee-validate.logaretm.com/v3/

const username = ref('')
const email = ref('')
const password = ref('')

const handleSubmit = async (e: Event) => {
  const res = await AuthAPI.logup({
    email: email.value,
    username: username.value,
    password: password.value
  })
  if ('id' in res) {
    // show message
  } else {
    // show error
  }
}

</script>
