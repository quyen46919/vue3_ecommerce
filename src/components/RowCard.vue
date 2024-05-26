<template>
  <!-- single wishlist -->
  <div
    class="flex items-center md:justify-between gap-4 md:gap-6 p-4 border border-gray-200 rounded flex-wrap md:flex-nowrap"
  >
    <!-- cart image -->
    <div class="w-28 flex-shrink-0">
      <img :src="props.thumbnail" class="w-full max-h-[100px]" />
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
        <span class="text-green-600" v-if="props?.amount && props?.amount > 0">In Stock</span>
        <span class="text-red-600" v-else>Out of stock</span>
      </p>
      <div v-if="props.showRating" class="flex items-center">
        <Rating :rating="averageRating" />
        <div class="text-xs text-gray-500 ml-3">({{ props?.comments?.length || 0 }})</div>
      </div>
    </div>
    <!-- cart content end -->
    <div class="">
      <p class="text-primary text-lg font-semibold">${{ discountedPrice }}</p>
    </div>
    <div>
      <div
        v-if="!isAlreadyInCart"
        class="max-w-44 min-w-44 ml-auto md:ml-0 block mb-1 px-6 py-2 text-center text-sm text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium cursor-pointer"
        @click="handleAddToCart"
      >
        Add to cart
      </div>
      <div
        v-if="isAlreadyInCart"
        class="max-w-44 min-w-44 ml-auto md:ml-0 block mb-1 px-6 py-2 text-center text-sm rounded hover:bg-transparent border border-primary text-primary transition uppercase font-roboto font-medium cursor-pointer"
        @click="handleRemoveFromCart"
      >
        Remove from cart
      </div>
      <div
        v-if="!isAlreadyInWishlist && props.showRemoveFromWishlist"
        class="max-w-44 min-w-44 ml-auto md:ml-0 block px-6 py-2 text-center text-sm text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium cursor-pointer"
        @click="handleAddToWishlist"
      >
        Add to wishlist
      </div>
      <div
        v-if="isAlreadyInWishlist && props.showRemoveFromWishlist"
        class="max-w-44 min-w-44 ml-auto md:ml-0 block px-6 py-2 text-center text-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium cursor-pointer"
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
  if (!props.price || !props.discount) return
  return Number(props?.price - (props?.price * props?.discount) / 100).toFixed(1)
})

const averageRating = computed(() => {
  if (!props.comments) return
  return props.comments?.map((item) => item.rating)?.reduce((a, b) => a + b, 0) / props.comments?.length
})

const isAlreadyInCart = computed(() => {
  return cartStore.isAlreadyInCart(props?.id)
})

const isAlreadyInWishlist = computed(() => {
  return wishlistStore.isAlreadyInWishlist(props?.id)
})

const handleAddToCart = () => {
  cartStore.addToCart({
    id: props.id as number,
    name: props.name || '',
    imageList: props.imageList || [],
    thumbnail: props?.thumbnail || '',
    price: props.price || 0,
    discount: props.discount || 0,
    targetQuantity: 1,
    amount: props.amount || 0
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
