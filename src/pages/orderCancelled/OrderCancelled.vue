<template>
  <!-- breadcrum -->
  <div class="py-4 container flex gap-3 items-center">
    <router-link :to="{ name: 'home' }" class="text-primary text-base">
      <i class="fas fa-home"></i>
    </router-link>
    <span class="text-sm text-gray-400"><i class="fas fa-chevron-right"></i></span>
    <p class="text-gray-600 font-medium uppercase">Shopping Cart</p>
  </div>
  <!-- breadcrum end -->

  <!-- order complete wrapper -->
  <div class="max-w-3xl mx-auto px-4 pt-16 pb-24 text-center">
    <h2 class="text-4xl font-bold text-primary mb-2">YOUR ORDER IS CANCELLED!</h2>
    <p class="text-gray-600">We're sorry to see that you have canceled your payment.</p>
    <p class="text-gray-600">
      If you need any assistance or have questions about your order, please don't hesitate to contact our support team.
      We're here to help!
    </p>
    <div class="mt-10">
      <RouterLink
        to="checkout"
        class="bg-primary border border-primary text-white px-6 py-3 font-medium rounded-md uppercase hover:bg-transparent hover:text-primary transition text-center"
      >
        Back to checkout
      </RouterLink>
    </div>
  </div>
  <!-- order complete wrapper end -->
</template>

<script setup lang="ts">
import completed from '@/assets/images/complete.png'
</script>
