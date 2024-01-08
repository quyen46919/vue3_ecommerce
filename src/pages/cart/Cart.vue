<template>
  <Breadcrum v-bind:listRoute="[{ name: 'Shopping cart', url: '/filter' }]" />

  <!-- cart wrapper -->
  <div class="container lg:grid grid-cols-12 gap-6 items-start pb-16 pt-4">
    <!-- product cart -->
    <div class="xl:col-span-9 lg:col-span-8">
      <!-- empty cart -->
      <div v-if="cart.length === 0">
        <div class="mt-10 text-center">
          <h3 class="text-2xl text-primary">Your cart is empty (´•︵•`)</h3>
          <br />
          <RouterLink to="/" class="text-gray-600 underline">Back to homepage</RouterLink>
        </div>
      </div>
      <!-- end empty cart -->
      <!-- cart title -->
      <div v-if="cart.length > 0" class="bg-gray-200 py-2 pl-12 pr-20 xl:pr-28 mb-4 hidden md:flex">
        <p class="text-gray-600 text-center">Product</p>
        <p class="text-gray-600 text-center ml-auto mr-16 xl:mr-24">Quantity</p>
        <p class="text-gray-600 text-center">Total</p>
      </div>
      <!-- cart title end -->

      <!-- shipping carts -->
      <div class="space-y-4">
        <!-- single cart -->
        <div
          class="flex items-center md:justify-between gap-4 md:gap-6 p-4 border border-gray-200 rounded flex-wrap md:flex-nowrap"
          v-for="item in cart"
          :key="item.id"
        >
          <!-- cart image -->
          <div class="w-32 flex-shrink-0">
            <img :src="item?.imageList?.[0]" class="w-full" />
          </div>
          <!-- cart image end -->
          <!-- cart content -->
          <div class="md:w-1/3 w-full">
            <RouterLink
              :to="'/product-detail/' + item?.id"
              class="text-gray-800 mb-3 xl:text-xl textl-lg font-medium uppercase"
            >
              {{ item?.name }}
            </RouterLink>
            <p class="text-primary font-semibold">
              ${{ Number(item?.price - (item?.price * item?.discount) / 100).toFixed(2) }}
            </p>
            <p class="text-gray-500">Size: {{ item?.name }}</p>
          </div>
          <!-- cart content end -->
          <!-- cart quantity -->
          <div class="flex border border-gray-300 text-gray-600 divide-x divide-gray-300">
            <div
              class="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"
              @click="handleChangeQuantity(item.id, 'decrement', item?.quantity)"
            >
              -
            </div>
            <div class="h-8 w-10 flex items-center justify-center">
              {{ item?.targetQuantity }}
            </div>
            <div
              class="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"
              @click="handleChangeQuantity(item.id, 'increment', item?.quantity)"
            >
              +
            </div>
          </div>
          <!-- cart quantity end -->
          <div class="w-20 flex-shrink-0 ml-auto md:ml-0">
            <p class="text-primary text-lg font-semibold text-center">
              ${{
                Number(Number(item?.price - (item?.price * item?.discount) / 100) * item?.targetQuantity).toFixed(2)
              }}
            </p>
          </div>
          <div class="text-gray-600 hover:text-primary cursor-pointer" @click="removeItem(item?.id)">
            <i class="fas fa-trash"></i>
          </div>
        </div>
        <!-- single cart end -->
      </div>
      <!-- shipping carts end -->
    </div>
    <!-- product cart end -->
    <!-- order summary -->
    <div class="xl:col-span-3 lg:col-span-4 border border-gray-200 px-4 py-4 rounded mt-6 lg:mt-0">
      <h4 class="text-gray-800 text-lg mb-4 font-medium uppercase">ORDER SUMMARY</h4>
      <div class="space-y-1 text-gray-600 pb-3 border-b border-gray-200">
        <div class="flex justify-between font-medium">
          <p>Subtotal</p>
          <p>${{ total }}</p>
        </div>
        <div class="flex justify-between">
          <p>Delivery</p>
          <p>Free</p>
        </div>
        <div class="flex justify-between">
          <p>Tax</p>
          <p>Free</p>
        </div>
      </div>
      <div class="flex justify-between my-3 text-gray-800 font-semibold uppercase">
        <h4>Total</h4>
        <h4>${{ total }}</h4>
      </div>

      <!-- searchbar -->
      <div class="flex mb-5">
        <input
          type="text"
          class="pl-4 w-full border border-r-0 border-primary py-2 px-3 rounded-l-md focus:ring-primary focus:border-primary text-sm"
          placeholder="Coupon"
        />
        <button
          type="submit"
          class="bg-primary border border-primary text-white px-5 font-medium rounded-r-md hover:bg-transparent hover:text-primary transition text-sm font-roboto"
        >
          Apply
        </button>
      </div>
      <!-- searchbar end -->

      <!-- checkout -->
      <RouterLink
        to="checkout"
        class="bg-primary border border-primary text-white px-4 py-3 font-medium rounded-md uppercase hover:bg-transparent hover:text-primary transition text-sm w-full block text-center"
      >
        Process to checkout
      </RouterLink>
      <!-- checkout end -->
    </div>
    <!-- order summary end -->
  </div>
  <!-- cart wrapper end -->
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useCart } from '@/store/cartStore'
import Breadcrum from '@/components/Breadcrum.vue'

const cartStore = useCart()
const cart = computed(() => cartStore.getCart)

const total = computed(() => {
  let total = 0
  cart.value.forEach((item) => {
    total += Number((item?.price - (item?.price * item?.discount) / 100).toFixed(2)) * item?.targetQuantity
  })
  return total.toFixed(2)
})

const handleChangeQuantity = (id: string, type: 'increment' | 'decrement', maxQuantity: number) => {
  const index = cart.value.findIndex((item) => item.id === id)
  if (index !== -1) {
    const item = cart.value?.[index]?.targetQuantity
    if (type === 'increment') {
      if (item !== undefined && item >= maxQuantity) return
      if (item !== undefined) cartStore.increaseQuantity(cart.value?.[index]?.id)
    } else {
      if (item !== undefined && item <= 1) return
      if (item !== undefined) cartStore.decreaseQuantity(cart.value?.[index]?.id)
    }
  }
}

const removeItem = (id?: string) => {
  cartStore.removeFromCart(id)
}
</script>
