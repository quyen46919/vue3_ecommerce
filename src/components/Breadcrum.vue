<template>
  <!-- breadcrum -->
  <div class="container py-4 flex justify-between">
    <div class="flex gap-3 items-center">
      <RouterLink to="/" class="text-primary text-base">
        <i class="fas fa-home"></i>
      </RouterLink>
      <span class="text-sm text-gray-400"><i class="fas fa-chevron-right"></i></span>
      <div v-for="(route, index) in props.listRoute" :key="route.name.toString()">
        <RouterLink
          :to="route.url || '#'"
          class="text-gray-600 font-medium uppercase cursor-pointer hover:text-primary"
        >
          {{ route.name }}
          <span v-if="index + 1 < (props?.listRoute?.length || 0)" class="text-sm text-gray-400 ml-1 cursor-default"
            ><i class="fas fa-chevron-right"></i
          ></span>
        </RouterLink>
      </div>
    </div>
  </div>
  <!-- breadcrum end -->
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { RouteLocationRaw } from 'vue-router'

type RouteProps = {
  name: String
  url?: RouteLocationRaw
}

const props = defineProps({
  listRoute: Array as PropType<RouteProps[]>
})
</script>
