<template>
  <header class="fixed top-0 left-0 right-0 z-30 flex items-center justify-between h-16 px-4 bg-white border-b border-gray-200 shadow-sm">
    <button
      class="flex items-center justify-center w-10 h-10 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
      aria-label="Open navigation"
      @click="$emit('toggleNav')"
    >
      <Icon
        name="mdi:menu"
        class="w-6 h-6"
      />
    </button>
    <div class="flex items-center gap-2">
      <span class="text-sm font-bold text-gray-900 uppercase tracking-wider">Daniel Gran</span>
    </div>
    <div class="w-10" />
  </header>
</template>

<script setup lang="ts">
defineEmits<{
  toggleNav: []
}>();
</script>
