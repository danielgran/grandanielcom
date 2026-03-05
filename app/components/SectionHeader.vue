<template>
  <div class="mb-10">
    <h1 class="text-2xl lg:text-3xl font-bold text-gray-900 uppercase tracking-wide">
      <slot />
    </h1>
    <div class="mt-3 h-[3px] w-12 bg-accent-600 rounded-full" />
    <p
      v-if="description"
      class="mt-4 text-gray-500 text-sm leading-relaxed max-w-2xl"
    >
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  description?: string
}>();
</script>
