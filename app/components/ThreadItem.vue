<template>
  <li class="thread-item">
    <div class="thread-marker" />
    <div>
      <div class="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
        <h4 class="text-sm font-semibold text-gray-900">
          {{ title }}
        </h4>
      </div>
      <div class="mt-0.5">
        <span
          v-if="date"
          class="text-xs text-gray-400"
        >{{ date }}</span>
      </div>
      <p
        v-if="description"
        class="text-sm text-gray-600 leading-relaxed mt-1"
      >
        {{ description }}
      </p>
    </div>
  </li>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  date?: string
  description?: string
}>();
</script>
