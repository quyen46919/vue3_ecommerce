<template>
  <!-- footer -->
  <footer class="bg-white pt-16 pb-12 border-t border-gray-100">
    <div class="container">
      <div class="xl:grid xl:grid-cols-3 xl:gap-8">
        <!-- footer text -->
        <div class="space-y-8 xl:col-span-1">
          <img class="w-30" :src="logo" alt="Company name" />
          <p class="text-gray-500 text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio facere rem
          </p>
          <div class="flex space-x-6">
            <a href="#" class="text-gray-400 hover:text-gray-500">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-gray-500">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-gray-500">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-gray-500">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
        <!-- footer text end -->
        <!-- footer links -->
        <div class="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">Solutions</h3>
              <div class="mt-4 space-y-4">
                <RouterLink
                  v-for="sol in solutionLinks"
                  :key="sol.name"
                  :to="sol.url"
                  class="text-base text-gray-500 hover:text-gray-900 block"
                >
                  {{ sol.name }}
                </RouterLink>
              </div>
            </div>
            <div class="mt-12 md:mt-0">
              <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">Support</h3>
              <div class="mt-4 space-y-4">
                <RouterLink
                  v-for="sup in supportLinks"
                  :key="sup.name"
                  :to="sup.url"
                  class="text-base text-gray-500 hover:text-gray-900 block"
                >
                  {{ sup.name }}
                </RouterLink>
              </div>
            </div>
          </div>
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
              <div class="mt-4 space-y-4">
                <RouterLink
                  v-for="com in companyLinks"
                  :key="com.name"
                  :to="com.url"
                  class="text-base text-gray-500 hover:text-gray-900 block"
                >
                  {{ com.name }}
                </RouterLink>
              </div>
            </div>
            <div class="mt-12 md:mt-0">
              <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
              <div class="mt-4 space-y-4">
                <RouterLink
                  v-for="legal in legalLinks"
                  :key="legal.name"
                  :to="legal.url"
                  class="text-base text-gray-500 hover:text-gray-900 block"
                >
                  {{ legal.name }}
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
        <!-- footer links end -->
      </div>
    </div>
  </footer>
  <!-- footer end -->

  <!-- copyright -->
  <div class="bg-gray-800 py-4">
    <div class="container flex items-center justify-between">
      <p class="text-white">© RAFCART - All Rights Reserved</p>
      <div>
        <img :src="method" class="h-5" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import logo from '@/assets/images/logo.svg'
import method from '@/assets/images/methods.png'

const solutionLinks = [
  { name: 'Marketing', url: '/marketing' },
  { name: 'Analytics', url: '/analytics' },
  { name: 'Commerce', url: '/commerce' },
  { name: 'Insights', url: '/insights' }
]

const supportLinks = [
  { name: 'Pricing', url: '/pricing' },
  { name: 'Documentation', url: '/documentation' },
  { name: 'Guides', url: '/guides' },
  { name: 'API Status', url: '/api-status' }
]

const companyLinks = [
  { name: 'About', url: '/about' },
  { name: 'Blog', url: '/blog' },
  { name: 'Jobs', url: '/jobs' },
  { name: 'Press', url: '/press' }
]

const legalLinks = [
  { name: 'Claim', url: '/claim' },
  { name: 'Privacy', url: '/privacy' },
  { name: 'Policy', url: '/policy' },
  { name: 'Terms', url: '/terms' }
]
</script>
