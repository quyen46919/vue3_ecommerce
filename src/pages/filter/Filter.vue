<template>
  <!-- breadcrum -->
  <div class="container py-4 flex justify-between">
    <div class="flex gap-3 items-center">
      <a href="index.html" class="text-primary text-base">
        <i class="fas fa-home"></i>
      </a>
      <span class="text-sm text-gray-400"><i class="fas fa-chevron-right"></i></span>
      <p class="text-gray-600 font-medium">Shop</p>
    </div>
  </div>
  <!-- breadcrum end -->

  <!-- shop wrapper -->
  <div class="container grid lg:grid-cols-4 gap-6 pt-4 pb-16 items-start relative">
    <!-- sidebar -->
    <div
      class="col-span-1 bg-white px-4 pt-4 pb-6 shadow rounded overflow-hidden absolute lg:static left-4 top-16 z-10 w-72 lg:w-full lg:block"
    >
      <div class="divide-gray-200 divide-y space-y-5 relative">
        <!-- category filter -->
        <div class="relative">
          <div class="lg:hidden text-gray-400 hover:text-primary text-lg absolute right-0 top-0 cursor-pointer">
            <i class="fas fa-times"></i>
          </div>
          <h3 class="text-xl text-gray-800 mb-3 uppercase font-medium">Categories</h3>
          <div class="space-y-2">
            <!-- single category -->
            <div class="flex items-center">
              <input type="checkbox" id="Bedroom" class="text-primary focus:ring-0 rounded-sm cursor-pointer" />
              <label for="Bedroom" class="text-gray-600 ml-3 cursor-pointer">Bedroom</label>
              <div class="ml-auto text-gray-600 text-sm">(15)</div>
            </div>
            <!-- single category end -->
            <!-- single category -->
            <div class="flex items-center">
              <input type="checkbox" id="Sofa" class="text-primary focus:ring-0 rounded-sm cursor-pointer" />
              <label for="Sofa" class="text-gray-600 ml-3 cursor-pointer">Sofa</label>
              <div class="ml-auto text-gray-600 text-sm">(05)</div>
            </div>
            <!-- single category end -->
            <!-- single category -->
            <div class="flex items-center">
              <input type="checkbox" id="Office" class="text-primary focus:ring-0 rounded-sm cursor-pointer" />
              <label for="Office" class="text-gray-600 ml-3 cursor-pointer">Office</label>
              <div class="ml-auto text-gray-600 text-sm">(09)</div>
            </div>
            <!-- single category end -->
            <!-- single category -->
            <div class="flex items-center">
              <input type="checkbox" id="Outdoor" class="text-primary focus:ring-0 rounded-sm cursor-pointer" />
              <label for="Outdoor" class="text-gray-600 ml-3 cursor-pointer">Outdoor</label>
              <div class="ml-auto text-gray-600 text-sm">(19)</div>
            </div>
            <!-- single category end -->
          </div>
        </div>
        <!-- category filter end -->
        <!-- brand filter -->
        <div class="pt-4">
          <h3 class="text-xl text-gray-800 mb-3 uppercase font-medium">Brands</h3>
          <div class="space-y-2">
            <!-- single brand name -->
            <div class="flex items-center">
              <input type="checkbox" id="Dominik" class="text-primary focus:ring-0 rounded-sm cursor-pointer" />
              <label for="Dominik" class="text-gray-600 ml-3 cursor-pointer">Dominik</label>
              <div class="ml-auto text-gray-600 text-sm">(15)</div>
            </div>
            <!-- single brand name end -->
            <!-- single brand name -->
            <div class="flex items-center">
              <input type="checkbox" id="Karl" class="text-primary focus:ring-0 rounded-sm cursor-pointer" />
              <label for="Karl" class="text-gray-600 ml-3 cursor-pointer">Karl</label>
              <div class="ml-auto text-gray-600 text-sm">(18)</div>
            </div>
            <!-- single brand name end -->
            <!-- single brand name -->
            <div class="flex items-center">
              <input type="checkbox" id="Maxing" class="text-primary focus:ring-0 rounded-sm cursor-pointer" />
              <label for="Maxing" class="text-gray-600 ml-3 cursor-pointer">Maxing</label>
              <div class="ml-auto text-gray-600 text-sm">(09)</div>
            </div>
            <!-- single brand name end -->
            <!-- single brand name -->
            <div class="flex items-center">
              <input type="checkbox" id="Ernest" class="text-primary focus:ring-0 rounded-sm cursor-pointer" />
              <label for="Ernest" class="text-gray-600 ml-3 cursor-pointer">Ernest</label>
              <div class="ml-auto text-gray-600 text-sm">(12)</div>
            </div>
            <!-- single brand name end -->
          </div>
        </div>
        <!-- brand filter end -->
        <!-- price filter -->
        <div class="pt-4">
          <h3 class="text-xl text-gray-800 mb-3 uppercase font-medium">Price</h3>
          <div class="mt-4 flex items-center">
            <input
              type="text"
              class="w-full border-gray-300 focus:ring-0 focus:border-primary px-3 py-1 text-gray-600 text-sm shadow-sm rounded"
              placeholder="min"
            />
            <span class="mx-3 text-gray-500">-</span>
            <input
              type="text"
              class="w-full border-gray-300 focus:ring-0 focus:border-primary px-3 py-1 text-gray-600 text-sm shadow-sm rounded"
              placeholder="mix"
            />
          </div>
        </div>
        <!-- price filter end -->
        <!-- size filter -->
        <div class="pt-4">
          <h3 class="text-xl text-gray-800 mb-3 uppercase font-medium">size</h3>
          <div class="flex items-center gap-2">
            <!-- single size -->
            <div class="size-selector">
              <input type="radio" name="size" class="hidden" id="size-xs" />
              <label
                for="size-xs"
                class="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
              >
                XS
              </label>
            </div>
            <!-- single size end -->
            <!-- single size -->
            <div class="size-selector">
              <input type="radio" name="size" class="hidden" id="size-s" />
              <label
                for="size-s"
                class="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
              >
                S
              </label>
            </div>
            <!-- single size end -->
            <!-- single size -->
            <div class="size-selector">
              <input type="radio" name="size" class="hidden" id="size-m" checked />
              <label
                for="size-m"
                class="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
              >
                M
              </label>
            </div>
            <!-- single size end -->
            <!-- single size -->
            <div class="size-selector">
              <input type="radio" name="size" class="hidden" id="size-l" />
              <label
                for="size-l"
                class="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
              >
                L
              </label>
            </div>
            <!-- single size end -->
            <!-- single size -->
            <div class="size-selector">
              <input type="radio" name="size" class="hidden" id="size-xl" />
              <label
                for="size-xl"
                class="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
              >
                XL
              </label>
            </div>
            <!-- single size end -->
          </div>
        </div>
        <!-- size filter end -->
        <!-- color filter -->
        <div class="pt-4">
          <h3 class="text-xl text-gray-800 mb-3 uppercase font-medium">color</h3>
          <div class="flex items-center gap-2">
            <!-- single color -->
            <div class="color-selector">
              <input type="radio" name="color" class="hidden" id="color-red" checked />
              <label
                for="color-red"
                style="background-color: #fc3d57"
                class="text-xs border border-gray-200 rounded-sm h-5 w-5 flex items-center justify-center cursor-pointer shadow-sm"
              >
              </label>
            </div>
            <!-- single color end -->
            <!-- single color -->
            <div class="color-selector">
              <input type="radio" name="color" class="hidden" id="color-white" />
              <label
                for="color-white"
                style="background-color: #fff"
                class="text-xs border border-gray-200 rounded-sm h-5 w-5 flex items-center justify-center cursor-pointer shadow-sm"
              >
              </label>
            </div>
            <!-- single color end -->
            <!-- single color -->
            <div class="color-selector">
              <input type="radio" name="color" class="hidden" id="color-black" />
              <label
                for="color-black"
                style="background-color: #000"
                class="text-xs border border-gray-200 rounded-sm h-5 w-5 flex items-center justify-center cursor-pointer shadow-sm"
              >
              </label>
            </div>
            <!-- single color end -->
          </div>
        </div>
        <!-- color filter end -->
      </div>
    </div>
    <!-- sidebar end -->

    <!-- products -->
    <div class="col-span-3">
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
      <div v-if="targetDisplayType === 'col'" class="grid lg:grid-cols-2 xl:grid-cols-3 sm:grid-cols-2 gap-6">
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
      <!-- product wrapper end -->
    </div>
    <!-- products end -->
  </div>
  <!-- shop wrapper end -->
</template>

<script setup lang="ts">
import allCards from '@/faker/index'
import Card from '@/components/Card.vue'
import RowCard from '@/components/RowCard.vue'
import { ref } from 'vue'

const cardList = ref(allCards)

type DisplayTypes = 'col' | 'row'
const targetDisplayType = ref<DisplayTypes>('col')

const handleChangeDisplayType = (type: DisplayTypes) => {
  targetDisplayType.value = type
}
</script>
