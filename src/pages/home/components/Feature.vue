<template>
  <!-- single feature -->
  <div class="border-primary border rounded-sm px-8 lg:px-3 lg:py-6 py-4 flex justify-center items-center gap-5">
    <img :src="props.image" class="lg:w-12 w-10 h-12 object-contain" />
    <div>
      <h4 class="font-medium capitalize text-lg">{{ props.name }}</h4>
      <p class="text-gray-500 text-xs lg:text-sm">{{ props.description }}</p>
    </div>
  </div>
  <!-- single feature end -->
</template>

<script setup lang="ts">
const props = defineProps({
  image: String,
  name: String,
  description: String
})
</script>
