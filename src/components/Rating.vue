<template>
  <div class="flex gap-1 text-sm text-yellow-400">
    <span v-for="(_, index) in 5" :key="index">
      <i
        class="fas fa-star"
        :class="{ 'text-yellow-400': index < props.rating, 'text-gray-300': index >= props.rating }"
      ></i>
    </span>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    rating: number
  }>(),
  {
    rating: 0
  }
)
</script>
