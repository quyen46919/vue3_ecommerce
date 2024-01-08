<template>
  <!-- single wishlist -->
  <div
    class="flex items-center md:justify-between gap-4 md:gap-6 p-4 border border-gray-200 rounded flex-wrap md:flex-nowrap"
  >
    <!-- cart image -->
    <div class="w-28 flex-shrink-0">
      <img :src="props.imageList?.[0]" class="w-full" />
    </div>
    <!-- cart image end -->
    <!-- cart content -->
    <div class="md:w-1/3 w-full">
      <RouterLink
        :to="'/product-detail/' + props?.id"
        class="text-gray-800 mb-1 xl:text-xl textl-lg font-medium uppercase"
      >
        {{ props?.name }}
      </RouterLink>
      <p v-if="props.showAvailability" class="text-gray-500 text-sm">
        Availability:
        <span class="text-green-600" v-if="props?.inStock">In Stock</span>
        <span class="text-red-600" v-if="!props?.inStock">Out of stock</span>
      </p>
      <div v-if="props.showRating" class="flex items-center">
        <Rating :rating="props?.rating" />
        <div class="text-xs text-gray-500 ml-3">({{ props?.reviewCount }})</div>
      </div>
    </div>
    <!-- cart content end -->
    <div class="">
      <p class="text-primary text-lg font-semibold">${{ discountedPrice }}</p>
      <p class="text-md text-gray-400 font-roboto line-through">${{ props?.price }}</p>
    </div>
    <div class="flex md:flex-col w-full md:w-fit justify-start md:items-end gap-1">
      <div
        v-if="!isAlreadyInCart"
        class="w-1/2 md:max-w-44 md:min-w-44 md:ml-0 block px-6 py-2 text-center text-sm text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium cursor-pointer"
        @click="handleAddToCart"
      >
        Add to cart
      </div>
      <div
        v-if="isAlreadyInCart"
        class="w-1/2 md:max-w-44 md:min-w-44 md:ml-0 block md:mb-1 mb-0 px-6 py-2 text-center text-sm rounded hover:bg-transparent border border-primary text-primary transition uppercase font-roboto font-medium cursor-pointer"
        @click="handleRemoveFromCart"
      >
        Remove from cart
      </div>
      <div
        v-if="!isAlreadyInWishlist && props.showRemoveFromWishlist"
        class="w-1/2 md:max-w-44 md:min-w-44 md:ml-0 block px-6 py-2 text-center text-sm text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium cursor-pointer"
        @click="handleAddToWishlist"
      >
        Add to wishlist
      </div>
      <div
        v-if="isAlreadyInWishlist && props.showRemoveFromWishlist"
        class="w-1/2 md:max-w-44 md:min-w-44 md:ml-0 block md:mb-1 mb-0 px-6 py-2 text-center text-sm rounded hover:bg-transparent border border-primary text-primary transition uppercase font-roboto font-medium cursor-pointer"
        @click="handleRemoveFromWishList"
      >
        Remove from wishlist
      </div>
    </div>
    <div
      v-if="!props.disableDeleteButton"
      @click="handleRemoveFromWishList"
      class="text-gray-600 hover:text-primary cursor-pointer"
    >
      <i class="fas fa-trash"></i>
    </div>
  </div>
  <!-- single wishlist end -->
</template>

<script setup lang="ts">
import CardProps from '@/interfaces/card'
import Rating from '@/components/Rating.vue'
import { computed } from 'vue'
import { useCart } from '@/store/cartStore'
import { useWishList } from '@/store/wishlistStore'
const cartStore = useCart()
const wishlistStore = useWishList()

type RowCardProps = Partial<CardProps> & {
  disableDeleteButton: boolean
  showRating?: boolean
  showAvailability?: boolean
  showRemoveFromWishlist?: boolean
}

const props = defineProps<RowCardProps>()

const discountedPrice = computed(() => {
  if (props?.price && props?.discount) {
    return Number(props?.price - (props?.price * props?.discount) / 100).toFixed(2)
  } else {
    return 0
  }
})

const isAlreadyInCart = computed(() => {
  return cartStore.isAlreadyInCart(props?.id)
})

const isAlreadyInWishlist = computed(() => {
  return wishlistStore.isAlreadyInWishlist(props?.id)
})

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

const handleAddToWishlist = () => {
  wishlistStore.addToWishlist(props)
}

const handleRemoveFromWishList = () => {
  wishlistStore.removeFromWishlist(props?.id)
}
</script>
