<template>
  <!-- breadcrum -->
  <div class="py-4 container flex gap-3 items-center">
    <a href="index.html" class="text-primary text-base">
      <i class="fas fa-home"></i>
    </a>
    <span class="text-sm text-gray-400"><i class="fas fa-chevron-right"></i></span>
    <p class="text-gray-600 font-medium uppercase">My Account</p>
  </div>
  <!-- breadcrum end -->

  <!-- account wrapper -->
  <div class="container lg:grid grid-cols-12 items-start gap-6 pt-4 pb-16">
    <ProfileMenu />

    <!-- account content -->
    <div class="col-span-9 grid md:grid-cols-3 gap-4 mt-6 lg:mt-0">
      <!-- single card -->
      <div class="shadow rounded bg-white px-4 pt-6 pb-8">
        <div class="flex justify-between items center mb-4">
          <h3 class="font-medium capitalize text-gray-800 text-lg">personal profile</h3>
          <a href="#" class="text-primary">Edit</a>
        </div>
        <div class="space-y-1">
          <h4 class="text-gray-700 font-medium">{{ user.name }}</h4>
          <p class="text-gray-800">{{ user.email }}</p>
          <p class="text-gray-800">{{ user.phoneNumber }}</p>
        </div>
      </div>
      <!-- single card end -->
      <!-- single card -->
      <div class="shadow rounded bg-white px-4 pt-6 pb-8">
        <div class="flex justify-between items center mb-4">
          <h3 class="font-medium capitalize text-gray-800 text-lg">Shipping Address</h3>
          <a href="#" class="text-primary">Edit</a>
        </div>
        <div class="space-y-1">
          <h4 class="text-gray-700 font-medium">{{ user.name }}</h4>
          <p class="text-gray-800">{{ user.shippingAddress.adress }}</p>
          <p class="text-gray-800">{{ user.shippingAddress.area }}, {{ user.shippingAddress.city }}</p>
          <p class="text-gray-800">{{ user.phoneNumber }}</p>
        </div>
      </div>
      <!-- single card end -->
      <!-- single card -->
      <div class="shadow rounded bg-white px-4 pt-6 pb-8">
        <div class="flex justify-between items center mb-4">
          <h3 class="font-medium capitalize text-gray-800 text-lg">Billing Address</h3>
          <a href="#" class="text-primary">Edit</a>
        </div>
        <div class="space-y-1">
          <h4 class="text-gray-700 font-medium">{{ user.name }}</h4>
          <p class="text-gray-800">{{ user.shippingAddress.adress }}</p>
          <p class="text-gray-800">{{ user.shippingAddress.area }}, {{ user.shippingAddress.city }}</p>
          <p class="text-gray-800">{{ user.shippingAddress.region }}, {{ user.shippingAddress.country }}</p>
          <p class="text-gray-800">{{ user.phoneNumber }}</p>
        </div>
      </div>
      <!-- single card end -->
    </div>
    <!-- account content end -->
  </div>
  <!-- account wrapper end -->
</template>

<script setup lang="ts">
import ProfileMenu from '@/components/ProfileMenu.vue'
const user = JSON.parse(localStorage.getItem('user') || '')
</script>
