<template>
  <div
    :id="id"
    class="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-md transition-shadow"
  >
    <div class="flex items-start gap-3 mb-3">
      <div
        v-if="icon"
        class="flex items-center justify-center w-10 h-10 rounded-lg bg-accent-50 text-accent-600 shrink-0"
      >
        <Icon
          :name="icon"
          class="w-5 h-5"
        />
      </div>
      <div>
        <h3 class="text-base font-semibold text-gray-900">
          {{ title }}
        </h3>
        <p
          v-if="subtitle"
          class="text-xs text-gray-400 mt-0.5"
        >
          {{ subtitle }}
        </p>
      </div>
    </div>
    <p
      v-if="description"
      class="text-sm text-gray-600 leading-relaxed mb-3"
    >
      {{ description }}
    </p>
    <ul
      v-if="items?.length"
      class="list-disc list-inside text-sm text-gray-600 space-y-1 mb-3"
    >
      <li
        v-for="(item, i) in items"
        :key="i"
      >
        {{ item }}
      </li>
    </ul>
    <div
      v-if="skillRefs?.length"
      class="flex flex-wrap gap-1.5"
    >
      <TagPill
        v-for="ref in skillRefs"
        :key="ref.skill"
        :label="ref.skill"
        :tooltip="ref.text"
      />
    </div>
    <div
      v-if="link"
      class="mt-3 pt-3 border-t border-gray-100"
    >
      <a
        :href="link"
        target="_blank"
        rel="noopener noreferrer dofollow"
        class="inline-flex items-center gap-1 text-xs font-medium text-accent-600 hover:text-accent-800 transition-colors"
      >
        <Icon
          name="mdi:file-document-outline"
          class="w-3.5 h-3.5"
        />
        Mehr erfahren
        <Icon
          name="mdi:arrow-right"
          class="w-3 h-3"
        />
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { SkillRef } from "~/data/skills";

defineProps<{
  id?: string
  title: string
  subtitle?: string
  description?: string
  icon?: string
  items?: string[]
  skillRefs?: SkillRef[]
  link?: string
}>();
</script>
