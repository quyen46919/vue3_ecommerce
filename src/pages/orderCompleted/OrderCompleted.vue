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
    <div class="mb-8">
      <img :src="completed" class="w-16 inline-block" />
    </div>
    <h2 class="text-4xl font-bold text-primary mb-2">YOUR ORDER IS COMPLETED!</h2>
    <p class="text-gray-600">
      Thank you for your order! Your order is being processed and will be completed within 3-6 hours. You will receive
      an email confirmation when your order is completed.
    </p>
    <div class="mt-10">
      <RouterLink
        to="/"
        class="bg-primary border border-primary text-white px-6 py-3 font-medium rounded-md uppercase hover:bg-transparent hover:text-primary transition text-center"
      >
        Continue shopping
      </RouterLink>
    </div>
  </div>
  <!-- order complete wrapper end -->
</template>

<script setup lang="ts">
import OrderAPI from '@/api/order.api'
import completed from '@/assets/images/complete.png'
import { useCart } from '@/store/cartStore'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()

const cartStore = useCart()
cartStore.clearCart()

onMounted(async () => {
  try {
    const orderId = localStorage.getItem('order_id') && JSON.parse(localStorage.getItem('order_id') || '')
    if (!orderId) return
    await OrderAPI.verifyPayment(Number(orderId), {
      order_id: Number(orderId),
      payment_id: route.query.paymentId as string
    })
    localStorage.removeItem('order_id')
  } catch (error) {
    console.log(error)
  }
})

</script>
