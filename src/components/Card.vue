<template>
  <!-- single product -->
  <div class="group rounded bg-white shadow overflow-hidden">
    <!-- product image -->
    <div class="relative">
      <img :src="props?.imageList?.[0]" class="w-full" />
      <div
        class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
      >
        <RouterLink
          :to="'/product-detail/' + props?.id"
          class="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center"
        >
          <i class="fas fa-search"></i>
        </RouterLink>
        <div
          v-if="!isAlreadyInWishlist"
          class="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center cursor-pointer"
          @click="handleAddToWishlist"
        >
          <i class="far fa-heart"></i>
        </div>
        <div
          v-if="isAlreadyInWishlist"
          class="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center cursor-pointer"
          @click="handleRemoveFromWishlist"
        >
          <i class="fa-solid fa-heart-crack"></i>
        </div>
      </div>
    </div>
    <!-- product image end -->
    <!-- product content -->
    <div class="pt-4 pb-3 px-4">
      <RouterLink :to="'product-detail/' + props?.id">
        <h4
          class="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition overflow-hidden truncate"
        >
          {{ props?.name }}
        </h4>
      </RouterLink>
      <div class="flex items-baseline mb-1 space-x-2">
        <p class="text-xl text-primary font-roboto font-semibold">${{ discountedPrice }}</p>
        <p class="text-sm text-gray-400 font-roboto line-through">${{ props?.price }}</p>
      </div>
      <div class="flex items-center">
        <Rating :rating="props?.rating" />
        <div class="text-xs text-gray-500 ml-3">({{ props?.reviewCount }})</div>
      </div>
    </div>
    <!-- product content end -->
    <!-- product button -->
    <div
      v-if="!isAlreadyInCart"
      class="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition cursor-pointer"
      @click="handleAddToCart"
    >
      Add to Cart
    </div>
    <div
      v-if="isAlreadyInCart"
      class="block w-full py-1 text-center text-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition cursor-pointer"
      @click="handleRemoveFromCart"
    >
      Remove from Cart
    </div>
    <!-- product button end -->
  </div>
  <!-- single product end -->
</template>
<script setup lang="ts">
import { computed } from 'vue'
import CardProps from '@/interfaces/card'
import Rating from '@/components/Rating.vue'
import { useCart } from '@/store/cartStore'
import { useWishList } from '@/store/wishlistStore'

const cartStore = useCart()
const wishlistStore = useWishList()

const props = defineProps<Partial<CardProps>>()

const discountedPrice = computed(() => {
  return Number(props?.price || 0 - (props?.price || 0 * (props?.discount || 0)) / 100).toFixed(2)
})

const isAlreadyInCart = computed(() => {
  return cartStore.isAlreadyInCart(props?.id)
})

const isAlreadyInWishlist = computed(() => {
  return wishlistStore.isAlreadyInWishlist(props?.id)
})

const handleAddToWishlist = () => {
  wishlistStore.addToWishlist(props)
}

const handleAddToCart = () => {
  cartStore.addToCart({
    id: props.id || '',
    name: props.name || '',
    imageList: props.imageList || [],
    price: props.price || 0,
    discount: props.discount || 0,
    targetSize: props.sizes?.[0].name || '',
    targetColor: props.sizes?.[0].items?.[0].color || '',
    targetQuantity: 1,
    quantity: props.sizes?.[0].items?.[0].quantity || 0
  })
}

const handleRemoveFromCart = () => {
  cartStore.removeFromCart(props?.id)
}

const handleRemoveFromWishlist = () => {
  wishlistStore.removeFromWishlist(props?.id)
}
</script>