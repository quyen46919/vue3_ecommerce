<template>
  <!-- header -->
  <header class="py-4 shadow-sm bg-pink-100 lg:bg-white">
    <div class="container flex items-center justify-between">
      <!-- logo -->
      <RouterLink to="/" class="block w-32">
        <img :src="logo" alt="logo" class="w-full" />
      </RouterLink>
      <!-- logo end -->

      <!-- searchbar -->
      <div class="w-full xl:max-w-xl lg:max-w-lg lg:flex relative hidden">
        <span class="absolute left-4 top-3 text-lg text-gray-400">
          <i class="fas fa-search"></i>
        </span>
        <input
          type="text"
          class="pl-12 w-full border border-r-0 border-primary py-3 px-3 rounded-l-md focus:ring-primary focus:border-primary"
          placeholder="search"
          v-model="search"
        />
        <button
          @click.prevent="handleSearch"
          class="bg-primary border border-primary text-white px-8 font-medium rounded-r-md hover:bg-transparent hover:text-primary transition"
        >
          Search
        </button>
      </div>
      <!-- searchbar end -->

      <!-- navicons -->
      <div class="space-x-4 flex items-center">
        <RouterLink to="/wishlist" class="block text-center text-gray-700 hover:text-primary transition relative">
          <span
            class="absolute -right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs"
            >{{ wishlist.getLength }}</span
          >
          <div class="text-2xl">
            <i class="far fa-heart"></i>
          </div>
          <div class="text-xs leading-3">Wish List</div>
        </RouterLink>
        <RouterLink to="/cart" class="lg:block text-center text-gray-700 hover:text-primary transition hidden relative">
          <span
            class="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs"
            >{{ cart.getLength }}</span
          >
          <div class="text-2xl">
            <i class="fas fa-shopping-bag"></i>
          </div>
          <div class="text-xs leading-3">Cart</div>
        </RouterLink>
        <RouterLink to="/profile" class="block text-center text-gray-700 hover:text-primary transition">
          <div class="text-2xl">
            <i class="far fa-user"></i>
          </div>
          <div class="text-xs leading-3">Account</div>
        </RouterLink>
      </div>
      <!-- navicons end -->
    </div>
  </header>
  <!-- header end -->

  <!-- mobile menubar -->
  <div
    class="fixed w-full border-t border-gray-200 shadow-sm bg-white py-3 bottom-0 left-0 flex justify-around items-start px-6 lg:hidden z-40"
  >
    <a href="javascript:void(0)" class="block text-center text-gray-700 hover:text-primary transition relative">
      <div class="text-2xl" id="menuBar">
        <i class="fas fa-bars"></i>
      </div>
      <div class="text-xs leading-3">Menu</div>
    </a>
    <a href="#" class="block text-center text-gray-700 hover:text-primary transition relative">
      <div class="text-2xl">
        <i class="fas fa-list-ul"></i>
      </div>
      <div class="text-xs leading-3">Category</div>
    </a>
    <a href="#" class="block text-center text-gray-700 hover:text-primary transition relative">
      <div class="text-2xl">
        <i class="fas fa-search"></i>
      </div>
      <div class="text-xs leading-3">Search</div>
    </a>
    <a href="cart.html" class="text-center text-gray-700 hover:text-primary transition relative">
      <span
        class="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs"
        >3</span
      >
      <div class="text-2xl">
        <i class="fas fa-shopping-bag"></i>
      </div>
      <div class="text-xs leading-3">Cart</div>
    </a>
  </div>
  <!-- mobile menu end -->

  <!-- mobile sidebar menu -->
  <div class="fixed left-0 top-0 w-full h-full z-50 bg-black bg-opacity-30 shadow hidden" id="mobileMenu">
    <div class="absolute left-0 top-0 w-72 h-full z-50 bg-white shadow">
      <div id="closeMenu" class="text-gray-400 hover:text-primary text-lg absolute right-3 top-3 cursor-pointer">
        <i class="fas fa-times"></i>
      </div>
      <!-- navlink -->
      <h3 class="text-xl font-semibold text-gray-700 mb-1 font-roboto pl-4 pt-4">Menu</h3>
      <div class="">
        <a href="index.html" class="block px-4 py-2 font-medium transition hover:bg-gray-100"> Home </a>
        <a href="shop.html" class="block px-4 py-2 font-medium transition hover:bg-gray-100"> Filter </a>
        <a href="#" class="block px-4 py-2 font-medium transition hover:bg-gray-100"> About Us </a>
        <roa href="#" class="block px-4 py-2 font-medium transition hover:bg-gray-100"> Contact Us </roa>
      </div>
      <!-- navlinks end -->
    </div>
  </div>
  <!-- mobile sidebar menu end -->
</template>

<script setup lang="ts">
import logo from '@/assets/images/logo.svg'
import { useWishList } from '@/store/wishlistStore'
import { useCart } from '@/store/cartStore'
import { ref } from 'vue'
import router from '@/router'

const wishlist = useWishList()
const cart = useCart()

const search = ref('')

const handleSearch = () => {
  router.push(`/filter?search=${search.value}`)
}
</script>
