<script setup lang="ts">
import CommmonHeader from '@/components/Header.vue'
import Navbar from '@/components/Navbar.vue'
import CommonFooter from '@/components/Footer.vue'
import MobileMenu from '@/components/MobileMenu.vue'
import MobileSidebarMenu from '@/components/MobileSidebarMenu.vue'
</script>

<template>
  <CommmonHeader />
  <Navbar />
  <MobileMenu />
  <MobileSidebarMenu />
  <RouterView />
  <CommonFooter />
</template>
