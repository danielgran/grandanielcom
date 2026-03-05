<template>
  <div class="bg-white border border-gray-100 rounded-xl p-5 hover:shadow-md transition-shadow">
    <div class="flex items-start gap-4">
      <div
        v-if="icon"
        class="flex items-center justify-center w-10 h-10 rounded-lg bg-accent-50 text-accent-600 shrink-0"
      >
        <Icon
          :name="icon"
          class="w-5 h-5"
        />
      </div>
      <div class="flex-1 min-w-0">
        <h3 class="text-sm font-semibold text-gray-900 mb-1">{{ name }}</h3>
        <p
          v-if="level"
          class="text-xs text-gray-500 mb-2"
        >
          {{ level }}
        </p>
        <div
          v-if="percentage != null"
          class="skill-progress"
        >
          <div
            class="skill-progress-fill"
            :style="{ width: percentage + '%' }"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name: string
  icon?: string
  level?: string
  percentage?: number
}>();
</script>
