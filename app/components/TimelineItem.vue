<template>
  <li
    :id="id"
    class="timeline-item"
  >
    <div class="timeline-marker" />
    <div>
      <div class="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
        <h3 class="text-base lg:text-lg font-semibold text-gray-900">
          {{ title }}
        </h3>
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
        v-if="skillRefs?.length"
        class="flex flex-wrap gap-1.5 mt-2"
      >
        <TagPill
          v-for="ref in skillRefs"
          :key="ref.skill"
          :label="ref.skill"
          :score="getScore(ref.skill)"
          :tooltip="ref.text"
        />
      </div>
    </div>
  </li>
</template>

<script setup lang="ts">
import { skillCategories } from "~/data/skills";
import type { SkillRef } from "~/data/skills";

defineProps<{
  id?: string
  title: string
  subtitle?: string
  date?: string
  description?: string
  items?: string[]
  skillRefs?: SkillRef[]
}>();

const skillPercentageMap = new Map<string, number>();
for (const cat of skillCategories) {
  for (const skill of cat.skills) {
    if (skill.percentage != null) {
      skillPercentageMap.set(skill.name.toLowerCase(), skill.percentage);
      if (skill.matchTags) {
        for (const tag of skill.matchTags) {
          skillPercentageMap.set(tag.toLowerCase(), skill.percentage);
        }
      }
    }
  }
}

function getScore(tag: string): number | undefined {
  return skillPercentageMap.get(tag.toLowerCase());
}
</script>
