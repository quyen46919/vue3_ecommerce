<template>
  <!-- breadcrum -->
  <div class="py-4 container flex gap-3 items-center">
    <a href="/" class="text-primary text-base">
      <i class="fas fa-home"></i>
    </a>
    <span class="text-sm text-gray-400"><i class="fas fa-chevron-right"></i></span>
    <p class="text-gray-600 font-medium uppercase">checkout</p>
  </div>
  <!-- breadcrum end -->

  <!-- checkout wrapper -->
  <form @submit="handleSubmit" class="container lg:grid grid-cols-12 gap-6 items-start pb-16 pt-4">
    <!-- checkout form -->
    <div class="lg:col-span-8 border border-gray-200 px-4 py-4 rounded">
      <form action="">
        <h3 class="text-lg font-medium capitalize mb-4">checkout</h3>
        <div class="space-y-4">
          <div class="grid sm:grid-cols-2 gap-4">
            <div>
              <label class="text-gray-600 mb-2 block"> First Name <span class="text-primary">*</span> </label>
              <input type="text" class="input-box w-full" required v-model="firstName" />
            </div>
            <div>
              <label class="text-gray-600 mb-2 block"> Last Name <span class="text-primary">*</span> </label>
              <input type="text" class="input-box w-full" required v-model="lastName" />
            </div>
          </div>
          <div>
            <label class="text-gray-600 mb-2 block"> Adress <span class="text-primary">*</span> </label>
            <input type="text" class="input-box w-full" required v-model="address" />
          </div>
          <div>
            <label class="text-gray-600 mb-2 block"> Phone Number <span class="text-primary">*</span> </label>
            <input type="text" class="input-box w-full" required v-model="phoneNumber" />
          </div>
          <div>
            <label class="text-gray-600 mb-2 block"> Description <span class="text-primary">*</span> </label>
            <input type="text" class="input-box w-full" required v-model="description" />
          </div>
        </div>
      </form>
    </div>
    <!-- checkout form end -->

    <!-- order summary -->
    <div class="lg:col-span-4 border border-gray-200 px-4 py-4 rounded mt-6 lg:mt-0">
      <h4 class="text-gray-800 text-lg mb-4 font-medium uppercase">ORDER SUMMARY</h4>
      <div class="space-y-2">
        <div class="flex justify-between" v-for="item in cart" :key="item.id">
          <div>
            <h5 class="text-gray-800 font-medium">{{ item.name }}</h5>
            <p class="text-sm text-gray-600">Discount: {{ item.discount }}%</p>
          </div>
          <p class="text-gray-600">x{{ item.targetQuantity }}</p>
          <p class="text-gray-800 font-medium">
            ${{ Number((item?.price - (item?.price * item?.discount) / 100).toFixed(1)) * item?.targetQuantity }}
          </p>
        </div>
      </div>
      <div class="flex justify-between border-b border-gray-200">
        <h4 class="text-gray-800 font-medium my-3 uppercase">Subtotal</h4>
        <h4 class="text-gray-800 font-medium my-3 uppercase">${{ total }}</h4>
      </div>
      <div class="flex justify-between border-b border-gray-200">
        <h4 class="text-gray-800 font-medium my-3 uppercase">Shipping</h4>
        <h4 class="text-gray-800 font-medium my-3 uppercase">Free</h4>
      </div>
      <div class="flex justify-between">
        <h4 class="text-gray-800 font-semibold my-3 uppercase">Total</h4>
        <h4 class="text-gray-800 font-semibold my-3 uppercase">${{ total }}</h4>
      </div>

      <!-- agreeement  -->
      <div class="flex items-center mb-4 mt-2">
        <input type="checkbox" id="agreement" class="text-primary focus:ring-0 rounded-sm cursor-pointer w-3 h-3" />
        <label for="agreement" class="text-gray-600 ml-3 cursor-pointer text-sm">
          Agree to our
          <RouterLink to="/terms" class="text-primary">terms &amp; conditions</RouterLink>
        </label>
      </div>

      <!-- checkout -->
      <button
        v-if="!isSubmitting"
        type="submit"
        class="bg-primary border border-primary text-white px-4 py-3 font-medium rounded-md uppercase hover:bg-transparent hover:text-primary transition text-sm w-full block text-center"
      >
        
        Place order
      </button>
      <button
        v-else
        type="submit"
        class="cursor-not-allowed bg-transparent border border-primary text-white px-4 py-3 font-medium rounded-md uppercase transition text-sm w-full block text-center"
      >
        
      <Loader />
      </button>
      <!-- checkout end -->
    </div>
    <!-- order summary end -->
  </form>
  <!-- checkout wrapper end -->
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import Loader from '@/components/Loader.vue'
import { useCart } from '@/store/cartStore'
import OrderAPI from '@/api/order.api'
import { useAuth } from '@/store/authStore'

const firstName = ref('')
const lastName = ref('')
const phoneNumber = ref('')
const address = ref('')
const description = ref('')
const isSubmitting = ref(false)

const cartStore = useCart()
const cart = computed(() => cartStore.getCart)
const user = (JSON.parse(localStorage.getItem('auth') || '') as any)

const total = computed(() => {
  let total = 0
  cart.value.forEach((item) => {
    total += Number((item?.price - (item?.price * item?.discount) / 100).toFixed(1)) * item?.targetQuantity
  })
  return total.toFixed(1)
})

const handleSubmit = async (e: any) => {
  e.preventDefault()
  if (!user?.id) return
  isSubmitting.value = true
  try {
    const res: any = await OrderAPI.createOrder({
      description: description.value,
      receiver_address: address.value,
      receiver_name: firstName.value + ' ' + lastName.value,
      receiver_phone: phoneNumber.value,
      user_id: user?.id
    })
    for (const item of cart.value) {
      await OrderAPI.createOrderDetail(res.id, {
        order_id: res.data?.id,
        amount: item.targetQuantity,
        discount: item.discount,
        price: item.price,
        product_id: item.id
      })
    }
    const paymentRes = await OrderAPI.createPaymentOrder(res.data?.id)
    localStorage.setItem('order_id', res?.data?.id)
     window.location.href =  paymentRes?.data?.approved_url;
  } catch (error) {
    console.log('error', error)
  } finally {
    isSubmitting.value = false
  }
}
</script>
