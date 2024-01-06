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
    <div class="col-span-9 mt-6 lg:mt-0 space-y-4">
      <RowCard
        v-for="card in wishlist"
        :key="card.id"
        v-bind="card"
        v-bind:showAvailability="true"
        v-bind:showRemoveFromWishlist="false"
        v-bind:disableDeleteButton="false"
      />
    </div>
    <!-- account content end -->
  </div>
  <!-- account wrapper end -->
</template>

<script setup lang="ts">
import ProfileMenu from '@/components/ProfileMenu.vue'
import RowCard from '@/components/RowCard.vue'
import { useWishList } from '@/store/wishlistStore'
import { computed } from 'vue'

const wishlistStore = useWishList()

const wishlist = computed(() => wishlistStore.getWishlist)
</script>
