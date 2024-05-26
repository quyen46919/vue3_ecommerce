<template>
  <!-- banner -->
  <div class="bg-cover bg-no-repeat bg-center py-36 relative" :style="{ backgroundImage: `url('${banner}')` }">
    <div class="container">
      <!-- banner content -->
      <h1 class="xl:text-6xl md:text-5xl text-4xl text-gray-800 font-medium mb-4">
        Best Collection For <br class="hidden sm:block" />
        Home Decoration
      </h1>
      <p class="text-base text-gray-600 leading-6">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
        <br class="hidden sm:block" />
        assumenda aliquid inventore nihil laboriosam odio
      </p>
      <!-- banner button -->
      <div class="mt-12">
        <RouterLink
          to="/filter"
          class="bg-primary border border-primary text-white px-8 py-3 font-medium rounded-md uppercase hover:bg-transparent hover:text-primary transition"
        >
          Shop now
        </RouterLink>
      </div>
      <!-- banner button end -->
      <!-- banner content end -->
    </div>
  </div>
  <!-- banner end -->

  <div class="container grid lg:grid-cols-4 gap-6 pt-4 pb-16 items-start relative">
    <!-- products -->
    <div class="col-span-4">
      <!-- sorting -->
      <div class="mb-4 flex items-center">
        <button
          class="bg-primary border border-primary text-white px-10 py-3 font-medium rounded uppercase hover:bg-transparent hover:text-primary transition lg:hidden text-sm mr-3 focus:outline-none"
        >
          Filter
        </button>
        <select
          class="w-44 text-sm text-gray-600 px-4 py-3 border-gray-300 shadow-sm rounded focus:ring-primary focus:border-primary"
        >
          <option>Default sorting</option>
          <option>Price low-high</option>
          <option>Price high-low</option>
          <option>Latest product</option>
        </select>
        <div class="flex gap-2 ml-auto">
          <div
            :class="
              'border border-gray-300 w-10 h-9 flex items-center justify-center text-gray-600 rounded cursor-pointer ' +
              [targetDisplayType === 'col' ? 'border border-primary text-white bg-primary' : '']
            "
            @click="handleChangeDisplayType('col')"
          >
            <i class="fas fa-th"></i>
          </div>
          <div
            :class="
              'border border-gray-300 w-10 h-9 flex items-center justify-center text-gray-600 rounded cursor-pointer ' +
              [targetDisplayType === 'row' ? 'border border-primary text-white bg-primary' : '']
            "
            @click="handleChangeDisplayType('row')"
          >
            <i class="fas fa-list"></i>
          </div>
        </div>
      </div>
      <!-- sorting end -->
      <!-- product wrapper -->
     <div v-if="cardList?.length">
         <div v-if="targetDisplayType === 'col'" class="grid lg:grid-cols-2 xl:grid-cols-4 sm:grid-cols-2 gap-6">
        <Card v-for="card in cardList" :key="card.id" v-bind="card" />
      </div>
      <div v-if="targetDisplayType === 'row'" class="col-span-9 mt-6 lg:mt-0 space-y-4">
        <RowCard
          v-for="card in cardList"
          :key="card.id"
          v-bind="card"
          v-bind:disableDeleteButton="true"
          v-bind:showAvailability="false"
          v-bind:showRating="true"
          v-bind:showRemoveFromWishlist="true"
        />
      </div>
     </div>
     <div v-else>
        Loading products...
     </div>
      <!-- product wrapper end -->
    </div>
    <!-- products end -->
  </div>

  <!-- features -->
  <div class="container py-16">
    <div class="lg:w-10/12 grid md:grid-cols-3 gap-3 lg:gap-6 mx-auto justify-center">
      <Feature
        v-for="feature in featureList"
        :key="feature.id"
        :image="feature.image"
        :name="feature.name"
        :description="feature.description"
      />
    </div>
  </div>
  <!-- features end -->

  <!-- categories -->
  <div class="container pb-16">
    <h2 class="text-2xl md:text-3xl font-medium text-gray-800 uppercase mb-6">shop by category</h2>
    <div v-if="categoryList.length" class="grid lg:grid-cols-3 sm:grid-cols-2 gap-3">
      <Category
        v-for="category in categoryList"
        :key="category.id"
        :id="category.id"
        :name="category.name"
        :thumbnail_url="category.thumbnail_url"
        :slug="category.slug"
      />
    </div>
    <div v-else>
      Loading categories
    </div>
  </div>
  <!-- categories end -->

  <!-- top new arrival -->
  <!-- <div class="container pb-16">
        <h2
            class="text-2xl md:text-3xl font-medium text-gray-800 uppercase mb-6"
        >
            top new arrival
        </h2>
        <div class="grid lg:grid-cols-4 sm:grid-cols-2 gap-6">
            <Card
                v-for="card in arrivalCardList"
                :key="card.id"
                v-bind="card"
            />
        </div>
    </div> -->
  <!-- top new arrival end -->

  <!-- ad section -->
  <div class="container pb-16">
    <a href="#">
      <img :src="offer" class="w-full" />
    </a>
  </div>
  <!-- ad section end -->

  <!-- recomended for you -->
  <div class="container pb-16">
    <h2 class="text-2xl md:text-3xl font-medium text-gray-800 uppercase mb-6">recomended for you</h2>
    <!-- product wrapper -->
    <div v-if="recommendProductList.length" class="grid lg:grid-cols-4 sm:grid-cols-2 gap-6">
      <Card v-for="card in recommendProductList" :key="card.id" v-bind="card" />
    </div>
    <div v-else>
      Loading recommend products...
    </div>
    <!-- product wrapper end -->
  </div>
  <!-- recomended for you end -->
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import Card from '@/components/Card.vue'
import RowCard from '@/components/RowCard.vue'
import Category from './components/Category.vue'
import Feature from './components/Feature.vue'
import recommendedForYou from '@/faker/home/recommended_for_you'
import categories from '@/faker/home/categories'
import banner from '@/assets/images/banner-bg.jpg'
import deliveryVan from '@/assets/images/icons/delivery-van.svg'
import moneyBack from '@/assets/images/icons/money-back.svg'
import serviceHours from '@/assets/images/icons/service-hours.svg'
import offer from '@/assets/images/offer.jpg'
import ProductAPI from '@/api/product.api'
import CategoryProps from '@/interfaces/category'
import CardProps from '@/interfaces/card'

const categoryList = ref<CategoryProps[]>([])
const recommendProductList = ref<CardProps[]>([])

const featureList = ref([
  {
    id: 1,
    name: 'free shipping',
    description: 'Order over $200',
    image: deliveryVan
  },
  {
    id: 2,
    name: 'Money returns',
    description: '30 Days money return',
    image: moneyBack
  },
  {
    id: 3,
    name: '24/7 Support',
    description: 'Customer support',
    image: serviceHours
  }
])

const cardList = ref<CardProps[]>([])

type DisplayTypes = 'col' | 'row'
const targetDisplayType = ref<DisplayTypes>('col')

const handleChangeDisplayType = (type: DisplayTypes) => {
  targetDisplayType.value = type
}

onMounted(async () => {
  try {
    const res = await ProductAPI.getRecommendProduct({
      page_no: 1,
      per_page: 100
    })
    cardList.value = res?.data?.list
  } catch (error) {
    console.error('Error fetching data:', error)
  }

  try {
    const res = await ProductAPI.getCategory({
      page_no: 1,
      per_page: 6
    })
    categoryList.value = res?.data?.list
  } catch (error) {
    console.error('Error fetching data:', error)
  }

  try {
    const res = await ProductAPI.getRecommendProduct({
      page_no: 1,
      per_page: 12
    })
    recommendProductList.value = res?.data?.list
  } catch (error) {
    console.error('Error fetching data:', error)
  }

})
</script>
