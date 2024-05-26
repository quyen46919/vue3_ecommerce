<template>
  <!-- sidebar -->
  <div class="col-span-3">
    <!-- account profile -->
    <div class="px-4 py-3 shadow flex items-center gap-4">
      <div class="flex-shrink-0">
        <img :src="user?.avatar" class="rounded-full w-14 h-14 p-1 border border-gray-200 object-cover" />
      </div>
      <div>
        <p class="text-gray-600">Hello,</p>
        <h4 class="text-gray-800 capitalize font-medium">{{ user?.username }}</h4>
      </div>
    </div>
    <!-- account profile end -->

    <!-- profile links -->
    <div class="mt-6 bg-white shadow rounded p-4 divide-y divide-gray-200 space-y-4 text-gray-600">
      <!-- single link -->
      <div class="space-y-1 pl-8">
        <a href="account.html" class="relative text-base font-medium capitalize hover:text-primary transition block">
          Manage account
          <span class="absolute -left-8 top-0 text-base">
            <i class="far fa-address-card"></i>
          </span>
        </a>
        <a href="profile-info.html" class="hover:text-primary transition capitalize block">Profile information</a>
        <a href="manage-address.html" class="hover:text-primary transition capitalize block">Manage address</a>
        <a href="change-password.html" class="hover:text-primary transition capitalize block">change password</a>
      </div>
      <!-- single link end -->
      <!-- single link -->
      <div class="space-y-1 pl-8 pt-4">
        <a href="#" class="relative medium capitalize text-gray-800 font-medium hover:text-primary transition block">
          My order history
          <span class="absolute -left-8 top-0 text-base">
            <i class="fas fa-gift"></i>
          </span>
        </a>
        <a href="#" class="hover:text-primary transition block capitalize">my returns</a>
        <a href="#" class="hover:text-primary transition block capitalize">my cancellations</a>
        <a href="#" class="hover:text-primary transition block capitalize">my reviews</a>
      </div>
      <!-- single link end -->
      <!-- single link -->
      <div class="space-y-1 pl-8 pt-4">
        <a href="#" class="relative medium capitalize text-gray-800 font-medium hover:text-primary transition block">
          Payment methods
          <span class="absolute -left-8 top-0 text-base">
            <i class="far fa-credit-card"></i>
          </span>
        </a>
        <a href="#" class="hover:text-primary transition block capitalize">Voucher</a>
      </div>
      <!-- single link end -->
      <!-- single link -->
      <div class="pl-8 pt-4">
        <a
          href="wishlist.html"
          class="relative medium capitalize font-medium hover:text-primary transition block text-primary"
        >
          my wishlist
          <span class="absolute -left-8 top-0 text-base">
            <i class="far fa-heart"></i>
          </span>
        </a>
      </div>
      <!-- single link end -->
      <!-- single link -->
      <div class="pl-8 pt-4">
        <a href="#" class="relative medium capitalize text-gray-800 font-medium hover:text-primary transition block">
          logout
          <span class="absolute -left-8 top-0 text-base">
            <i class="fas fa-sign-out-alt"></i>
          </span>
        </a>
      </div>
      <!-- single link end -->
    </div>
    <!-- profile links end -->
  </div>
  <!-- sidebar end -->
</template>

<script setup lang="ts">
import { useAuth } from '@/store/authStore'
import { computed } from 'vue'
const authStore = useAuth()
const user = computed(() => authStore.getUser)
</script>
