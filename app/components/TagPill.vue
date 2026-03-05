<template>
  <span class="inline-block px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
    {{ label }}
  </span>
</template>

<script setup lang="ts">
defineProps<{
  label: string
}>();
</script>
