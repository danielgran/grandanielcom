<template>
  <li class="timeline-item">
    <div class="timeline-marker" />
    <div>
      <div class="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
        <h3 class="text-base lg:text-lg font-semibold text-gray-900">{{ title }}</h3>
        <span
          v-if="date"
          class="text-xs font-medium text-accent-600 bg-accent-50 px-2.5 py-0.5 rounded-full whitespace-nowrap"
        >
          {{ date }}
        </span>
      </div>
      <p
        v-if="subtitle"
        class="text-sm text-gray-500 font-medium mb-2"
      >
        {{ subtitle }}
      </p>
      <p
        v-if="description"
        class="text-sm text-gray-600 leading-relaxed mb-2"
      >
        {{ description }}
      </p>
      <ul
        v-if="items?.length"
        class="list-disc list-inside text-sm text-gray-600 space-y-1 mb-2"
      >
        <li
          v-for="(item, i) in items"
          :key="i"
        >
          {{ item }}
        </li>
      </ul>
      <div
        v-if="tags?.length"
        class="flex flex-wrap gap-1.5 mt-2"
      >
        <TagPill
          v-for="tag in tags"
          :key="tag"
          :label="tag"
        />
      </div>
    </div>
  </li>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
  date?: string
  description?: string
  items?: string[]
  tags?: string[]
}>();
</script>
