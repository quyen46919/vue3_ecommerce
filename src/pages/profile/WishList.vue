<template>
  <Breadcrum v-bind:listRoute="[{ name: 'Account', url: '/account' }, { name: 'Wishlist' }]" />

  <!-- account wrapper -->
  <div class="container lg:grid grid-cols-12 items-start gap-6 pt-4 pb-16">
    <ProfileMenu />

    <!-- account content -->
    <div class="col-span-9 mt-6 lg:mt-0 space-y-4">
      <!-- empty cart -->
      <div v-if="wishlist.length === 0">
        <div class="mt-10 text-center">
          <h3 class="text-2xl text-primary">Your wishlist is empty (´•︵•`)</h3>
          <br />
          <RouterLink to="/" class="text-gray-600 underline">Back to homepage</RouterLink>
        </div>
      </div>
      <!-- end empty cart -->
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
import Breadcrum from '@/components/Breadcrum.vue'
import { useWishList } from '@/store/wishlistStore'
import { computed } from 'vue'

const wishlistStore = useWishList()

const wishlist = computed(() => wishlistStore.getWishlist)
</script>
