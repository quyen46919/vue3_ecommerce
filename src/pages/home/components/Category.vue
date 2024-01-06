<template>
  <!-- single category -->
  <div class="relative group rounded-sm overflow-hidden">
    <img :src="props.image" class="w-full" />
    <RouterLink
      :to="props.url"
      class="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 flex items-center justify-center text-xl text-white font-roboto font-medium tracking-wide transition"
    >
      {{ props.name }}
    </RouterLink>
  </div>
  <!-- single category end -->
</template>

<script setup lang="ts">
import Category from '@/interfaces/category'

const props = defineProps<Category>()
</script>
