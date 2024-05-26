<template>
  <!-- form wrapper -->
  <div class="container py-16">
    <div class="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
      <h2 class="text-2xl uppercase font-medium mb-1">LOGIN</h2>
      <p class="text-gray-600 mb-6 text-sm">Login if you are a returing customer</p>
      <div
        v-if="errorMessage"
        class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
        role="alert"
      >
        <span class="font-medium">{{ errorMessage }}</span>
      </div>
      <form @submit="handleSubmit">
        <div class="space-y-4">
          <div>
            <label class="text-gray-600 mb-2 block"> Username <span class="text-primary">*</span> </label>
            <input type="text" class="input-box w-full" placeholder="Input your username" v-model="username" required />
          </div>
          <div>
            <label class="text-gray-600 mb-2 block">Password <span class="text-primary">*</span></label>
            <input
              type="password"
              class="input-box w-full"
              placeholder="Input your password"
              v-model="password"
              required
            />
          </div>
        </div>
        <div class="flex items-center justify-between mt-6">
          <div class="flex items-center">
            <input type="checkbox" id="agreement" class="text-primary focus:ring-0 rounded-sm cursor-pointer" />
            <label for="agreement" class="text-gray-600 ml-3 cursor-pointer"> Remember Me </label>
          </div>
          <RouterLink to="/forgot-password" class="text-primary">Forgot Password?</RouterLink>
        </div>
        <div class="mt-4">
          <button
            type="submit"
            class="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
          >
            Login
          </button>
        </div>
      </form>

      <!-- login with social -->
      <div class="mt-6 flex justify-center relative">
        <div class="absolute left-0 top-3 w-full border-b-2 border-gray-200"></div>
        <div class="text-gray-600 uppercase px-3 bg-white relative z-10">OR LOGIN IN WITH</div>
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
        Don't have an account?
        <RouterLink to="signup" class="text-primary">Register Now </RouterLink>
      </p>
    </div>
  </div>
  <!-- form wrapper end -->
</template>

<script setup lang="ts">
import { ref } from 'vue'
import router from '@/router'
import user from '@/faker/auth/user'
import { useAuth } from '@/store/authStore'
import AuthAPI from '@/api/auth.api'

const authStore = useAuth()
const username = ref('')
const password = ref('')
const errorMessage = ref('')

const handleSubmit = async (e: any) => {
  e.preventDefault()
  if (!username || !password) return
  errorMessage.value = ''
  try {
    const res: any = await AuthAPI.login({
      username: username.value.toLowerCase(),
      password: password.value.toLowerCase()
    })
    localStorage.setItem('token', JSON.stringify(res.access))
    const profileRes: any = await AuthAPI.getProfile()
    authStore.login(profileRes)
    localStorage.setItem('auth', JSON.stringify(profileRes))
    router.push('/')
  } catch (err: any) {
    console.log(err)
    errorMessage.value = err?.response?.data?.detail || 'Username or password is not correct!'
  }
}
</script>
