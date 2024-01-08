<template>
  <!-- mobile menubar -->
  <div
    class="fixed w-full border-t border-gray-200 shadow-sm bg-white py-3 bottom-0 left-0 flex justify-around items-start px-6 lg:hidden z-40"
  >
    <div
      class="block text-center text-gray-700 hover:text-primary transition relative cursor-pointer"
      @click="handleShowMobileSidebarMenu"
    >
      <div class="text-2xl" id="menuBar">
        <i class="fas fa-bars"></i>
      </div>
      <div class="text-xs leading-3">Menu</div>
    </div>
    <RouterLink to="#" class="block text-center text-gray-700 hover:text-primary transition relative">
      <div class="text-2xl">
        <i class="fas fa-search"></i>
      </div>
      <div class="text-xs leading-3">Search</div>
    </RouterLink>
    <RouterLink to="cart" class="text-center text-gray-700 hover:text-primary transition relative">
      <span
        class="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs"
        >3</span
      >
      <div class="text-2xl">
        <i class="fas fa-shopping-bag"></i>
      </div>
      <div class="text-xs leading-3">Cart</div>
    </RouterLink>
  </div>
  <!-- mobile menu end -->
</template>

<script setup lang="ts">
import { useGlobal } from '@/store/globalStore'
const global = useGlobal()
const handleShowMobileSidebarMenu = () => {
  global.toggleMobileSidebarMenu()
}
</script>
