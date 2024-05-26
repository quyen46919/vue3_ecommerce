<template>
  <!-- breadcrum -->
  <div class="py-4 container flex gap-3 items-center">
    <a href="index.html" class="text-primary text-base">
      <i class="fas fa-home"></i>
    </a>
    <span class="text-sm text-gray-400"><i class="fas fa-chevron-right"></i></span>
    <a href="shop.html" class="text-primary text-base font-medium uppercase">
      {{ productDetail?.category_id?.name }}
    </a>
    <span class="text-sm text-gray-400"><i class="fas fa-chevron-right"></i></span>
    <p class="text-gray-600 font-medium uppercase">
      {{ productDetail?.name }}
    </p>
  </div>
  <!-- breadcrum end -->

  <!-- product view -->
  <div class="container pt-4 pb-6 grid lg:grid-cols-2 gap-6">
    <!-- product image -->
    <div>
      <div v-if="productDetail">
        <img id="main-img" :src="productDetail?.thumbnail" class="w-full max-h-96 object-cover" />
      </div>
      <!-- <div class="grid grid-cols-5 gap-4 mt-4">
        <div v-for="image in productDetail?.value?.images" :key="image">
                    <img
                        :src="image"
                        :class="
                            'single-img w-full cursor-pointer ' +
                            [targetImage === image && 'border border-primary']
                        "
                        @click="handleChangeImage(image)"
                    />
                </div>
      </div> -->
    </div>
    <!-- product image end -->
    <!-- product content -->
    <div>
      <h2 class="md:text-3xl text-2xl font-medium uppercase mb-2">
        {{ productDetail?.name }}
      </h2>
      <div class="flex items-center mb-4">
        <Rating v-if="averageRating" :rating="averageRating" />
        <div class="text-xs text-gray-500 ml-3">({{ productDetail?.comments?.length }} Reviews)</div>
      </div>
      <div class="space-y-2">
        <p class="text-gray-800 font-semibold space-x-2" v-if="productDetail">
          <span>Availability: </span>
          <span :class="[productDetail?.amount > 0 ? 'text-green-600' : 'text-red-600']">{{
            productDetail?.amount > 0 ? 'In stock' : 'Out of stock'
          }}</span>
        </p>
        <p class="space-x-2">
          <span class="text-gray-800 font-semibold">Category: </span>
          <span class="text-gray-600">{{ productDetail?.category_id?.name }}</span>
        </p>
      </div>
      <div class="mt-4 flex items-baseline gap-3">
        <span class="text-primary font-semibold text-xl">${{ discountedPrice }}</span>
        <span class="text-gray-500 text-base line-through">${{ productDetail?.price }}</span>
      </div>
      <p class="mt-4 text-gray-600">
        {{ productDetail?.description }}
      </p>
      <!-- size -->
      <!-- <div class="mt-4">
        <h3 class="text-base text-gray-800 mb-1">Size</h3>
        <div class="flex items-center gap-2">
          <div
            v-for="size in sizeList"
            :key="size"
            class="size-selector"
          >
            <input
                type="radio"
                name="size"
                class="hidden"
                :id="'size-' + size"
                :value="size"
                v-model="targetSize"
            />
            <label
                :for="'size-' + size"
                class="text-xs border border-gray-200 rounded-sm h-6 w-fit px-2 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                @click="handleSizeChange(size)"
            >
                {{ size }}
            </label>
        </div>
        </div>
      </div> -->
      <!-- size end -->
      <!-- color -->
      <!-- <div class="mt-4">
        <h3 class="text-base text-gray-800 mb-1">Color</h3>
        <div class="flex items-center gap-2">
          <div v-for="color in colorList" :key="color" class="color-selector">
            <input
              type="radio"
              name="color"
              class="hidden"
              :id="'color-' + color"
              :value="color"
              v-model="targetColor"
            />
            <label
              :for="'color-' + color"
              :style="'background-color:' + color"
              class="text-xs border border-gray-200 rounded-sm h-5 w-5 flex items-center justify-center cursor-pointer shadow-sm"
              @click="handleColorChange(color)"
            >
            </label>
          </div>
        </div>
      </div> -->
      <!-- color end -->
      <!-- quantity -->
      <div class="mt-4">
        <h3 class="text-base text-gray-800 mb-1">Quantity</h3>
        <div class="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
          <div
            class="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"
            @click="handleChangeQuantity('decrement')"
          >
            -
          </div>
          <div class="h-8 w-10 flex items-center justify-center">
            {{ targetQuantity }}
          </div>
          <div
            class="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"
            @click="handleChangeQuantity('increment')"
          >
            +
          </div>
        </div>
      </div>
      <!-- color end -->
      <!-- add to cart button -->
      <div class="flex gap-3 border-b border-gray-200 pb-5 mt-6">
        <div
          v-if="!isAlreadyInCart"
          class="bg-primary border border-primary text-white px-8 py-2 font-medium rounded uppercase hover:bg-transparent hover:text-primary transition text-sm flex items-center cursor-pointer"
          @click="handleAddToCart"
        >
          <span class="mr-2"><i class="fas fa-shopping-bag"></i></span>
          Add to cart
        </div>
        <div
          v-if="isAlreadyInCart"
          class="bg-primary border border-primary text-white px-8 py-2 font-medium rounded uppercase hover:bg-transparent hover:text-primary transition text-sm flex items-center cursor-pointer"
          @click="handleRemoveFromCart"
        >
          <span class="mr-2"><i class="fa-solid fa-xmark"></i></span>
          Remove from cart
        </div>
        <div
          v-if="!isAlreadyInWishlist"
          class="border border-gray-300 text-gray-600 px-8 py-2 font-medium rounded uppercase hover:bg-transparent hover:text-primary transition text-sm cursor-pointer"
          @click="handleAddToWishlist"
        >
          <span class="mr-2"><i class="far fa-heart"></i></span>
          Wishlist
        </div>
        <div
          v-if="isAlreadyInWishlist"
          class="border border-gray-300 text-gray-600 px-8 py-2 font-medium rounded uppercase hover:bg-transparent hover:text-primary transition text-sm cursor-pointer"
          @click="handleRemoveFromWishlist"
        >
          <span class="mr-2"><i class="fa-solid fa-heart-crack"></i></span>
          Remove from Wishlist
        </div>
      </div>
      <!-- add to cart button end -->
      <!-- product share icons -->
      <div class="flex space-x-3 mt-4">
        <a
          href="#"
          class="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
        >
          <i class="fab fa-facebook-f"></i>
        </a>
        <a
          href="#"
          class="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
        >
          <i class="fab fa-twitter"></i>
        </a>
        <a
          href="#"
          class="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
        >
          <i class="fab fa-instagram"></i>
        </a>
      </div>
      <!-- product share icons end -->
    </div>
    <!-- product content end -->
  </div>
  <!-- product view end -->

  <!-- product details and review -->
  <div class="container pb-16">
    <!-- detail buttons -->
    <h3 class="border-b border-gray-200 font-roboto text-gray-800 pb-3 font-medium">Product Details</h3>
    <!-- details button end -->

    <!-- details content -->
    <div class="lg:w-4/5 xl:w-3/5 pt-6">
      <div class="space-y-3 text-gray-600">
        <p>
          Incredible graphics performanceMacBook Air can take on more graphics-intensive projects than ever. For the
          first time, content creators can edit and seamlessly play back multiple streams of full‑quality 4K video
          without dropping a frame.
        </p>
        <p>
          Incredible graphics performanceMacBook Air can take on more graphics-intensive projects than ever. For the
          first time, content creators can edit and seamlessly play back multiple streams of full‑quality 4K video
          without dropping a frame.
        </p>
        <p>
          Apps on MacBook Air can use machine learning (ML) to automatically retouch photos like a pro, make smart tools
          such as magic wands and audio filters more accurate at auto‑detection, and so much more. That’s not just brain
          power — that’s the power of a full stack of ML technologies.
        </p>
      </div>
      <!-- details table -->
      <table class="table-auto border-collapse w-full text-left text-gray-600 text-sm mt-6">
        <tr>
          <th class="py-2 px-4 border border-gray-300 w-40 font-medium">Color</th>
          <td class="py-2 px-4 border border-gray-300">Black, Brown, Red</td>
        </tr>
        <tr>
          <th class="py-2 px-4 border border-gray-300 w-40 font-medium">Material</th>
          <td class="py-2 px-4 border border-gray-300">Artificial Leather</td>
        </tr>
        <tr>
          <th class="py-2 px-4 border border-gray-300 w-40 font-medium">Weight</th>
          <td class="py-2 px-4 border border-gray-300">55kg</td>
        </tr>
      </table>
      <!-- details table -->
    </div>
    <!-- details content end -->
  </div>
  <!-- product details and review end -->

  <!-- related products -->
  <div class="container">
    <h2 class="text-2xl md:text-3xl font-medium text-gray-800 uppercase mb-6">Comments</h2>
    <!-- product wrapper -->
    <section class="bg-white dark:bg-gray-900 pb-8 antialiased">
      <div class="max-w-2xl">
        <form>
          <div
            class="px-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700"
          >
            <label for="comment" class="sr-only">Your comment</label>
            <textarea
              id="comment"
              rows="6"
              class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
              placeholder="Write a comment..."
              required
            ></textarea>
          </div>
        </form>
        <article
          class="p-6 text-base bg-white rounded-lg dark:bg-gray-900"
          v-for="comment in productDetail?.comments"
          :key="comment.id"
        >
          <footer class="flex justify-between items-center mb-2">
            <div class="flex items-center">
              <p class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                <img
                  class="mr-2 w-6 h-6 rounded-full"
                  src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                  alt="Michael Gough"
                />User-{{ comment.id }}
              </p>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                <time pubdate datetime="2022-02-08" title="February 8th, 2022"
                  >{{ comment?.updated_at?.substring(0, 10) }} {{ comment?.updated_at?.substring(11, 16) }}</time
                >
              </p>
            </div>
          </footer>
          <p class="text-gray-500 dark:text-gray-400">
            {{ comment?.comment }}
          </p>
          <Rating :rating="comment?.rating" />
          <div class="flex items-center mt-4 space-x-4">
            <button
              type="button"
              class="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium"
            >
              <svg
                class="mr-1.5 w-3.5 h-3.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 18"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
                />
              </svg>
              Reply
            </button>
          </div>
        </article>
      </div>
    </section>
    <!-- product wrapper end -->
  </div>
  <!-- related products end -->
</template>

<script setup lang="ts">
import CardProps from '@/interfaces/card'
import Rating from '@/components/Rating.vue'
import Card from '@/components/Card.vue'
import { computed, onMounted, reactive, ref, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useWishList } from '@/store/wishlistStore'
import { useCart } from '@/store/cartStore'
import { isEmpty } from 'lodash'
import ProductAPI from '@/api/product.api'
const route = useRoute()
const wishlistStore = useWishList()
const cartStore = useCart()

const productDetail = ref<CardProps>()
const relativePrds = ref([])

// image galery logic
const targetImage = ref<string>('')

onMounted(async () => {
  try {
    const res = await ProductAPI.getProductDetail(Number(route.params.id))
    productDetail.value = res.data
  } catch (error) {
    console.log('error', error)
  }
})

const handleChangeImage = (image: string) => {
  targetImage.value = image
}

// price logic
const discountedPrice = computed(() => {
  if (!productDetail.value) return
  return Number(
    productDetail.value?.price - (productDetail.value?.price * productDetail.value?.discount) / 100
  ).toFixed(1)
})

const averageRating = computed(() => {
  if (!productDetail.value?.comments) return
  return Number(
    productDetail.value.comments?.map((item) => item.rating)?.reduce((a, b) => a + b, 0) /
    productDetail.value.comments?.length
  )
})

// Quantity logic
const targetQuantity = ref<number>(1)

const handleChangeQuantity = (type: 'increment' | 'decrement') => {
  if (!productDetail?.value) return
  if (type === 'increment') {
    if (targetQuantity.value >= productDetail?.value?.amount) return
    targetQuantity.value += 1
  } else {
    if (targetQuantity.value > 1) {
      targetQuantity.value -= 1
    }
  }
}

// store logic
const isAlreadyInWishlist = computed(() => {
  if (!productDetail.value) return
  return wishlistStore.isAlreadyInWishlist(productDetail.value.id)
})

const handleAddToWishlist = () => {
  if (!productDetail.value) return
  wishlistStore.addToWishlist(productDetail.value)
}

const handleRemoveFromWishlist = () => {
  if (!productDetail.value) return
  wishlistStore.removeFromWishlist(productDetail.value.id)
}

const isAlreadyInCart = computed(() => {
  if (!productDetail.value) return
  return cartStore.isAlreadyInCart(productDetail.value.id)
})

const handleAddToCart = () => {
  if (!productDetail.value) return
  cartStore.addToCart({
    id: productDetail.value.id,
    name: productDetail.value.name,
    thumbnail: productDetail.value.thumbnail,
    imageList: productDetail.value.imageList,
    price: productDetail.value.price,
    discount: productDetail.value.discount,
    // targetSize: targetSize.value,
    // targetColor: targetColor.value,
    targetQuantity: targetQuantity.value,
    amount: productDetail.value.amount
  })
}

const handleRemoveFromCart = () => {
  if (!productDetail.value) return
  cartStore.removeFromCart(productDetail.value.id)
}
</script>
