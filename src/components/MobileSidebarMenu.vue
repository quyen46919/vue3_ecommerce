<template>
  <!-- mobile sidebar menu -->
  <div v-if="global.showMobileSidebarMenu" class="fixed left-0 top-0 w-full h-full z-50 bg-black bg-opacity-30 shadow">
    <div class="absolute left-0 top-0 w-72 h-full z-50 bg-white shadow">
      <div
        @click="handleCloseMobileSidebarMenu"
        class="text-gray-400 hover:text-primary text-lg absolute right-3 top-3 cursor-pointer"
      >
        <i class="fas fa-times"></i>
      </div>
      <!-- navlink -->
      <h3 class="text-xl font-semibold text-gray-700 mb-1 font-roboto pl-4 pt-4">Menu</h3>
      <div @click="handleCloseMobileSidebarMenu">
        <RouterLink to="/" class="block px-4 py-2 transition hover:bg-gray-100"> Home </RouterLink>
        <RouterLink to="filter" class="block px-4 py-2 transition hover:bg-gray-100"> Filter </RouterLink>
        <RouterLink to="/about-us" class="block px-4 py-2 transition hover:bg-gray-100"> About Us </RouterLink>
        <RouterLink to="/contact-us" class="block px-4 py-2 transition hover:bg-gray-100"> Contact Us </RouterLink>
      </div>
      <!-- navlinks end -->
    </div>
  </div>
  <!-- mobile sidebar menu end -->
</template>

<script setup lang="ts">
import { useGlobal } from '@/store/globalStore'
import { computed } from 'vue'
const global = computed(() => useGlobal())

const handleCloseMobileSidebarMenu = () => {
  global.value.toggleMobileSidebarMenu()
}
</script>
