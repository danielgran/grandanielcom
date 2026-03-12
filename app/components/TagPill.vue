<template>
  <HoverTooltip :text="tooltip">
    <span
      class="inline-block px-2.5 py-1 rounded-full text-xs font-medium"
      :style="scoreStyle"
    >
      {{ label }}
    </span>
  </HoverTooltip>
</template>

<script setup lang="ts">
import { useSkillColor } from "~/composables/useSkillColor";

const props = defineProps<{
  label: string
  score?: number
  tooltip?: string
}>();

const { style: scoreStyle } = useSkillColor(() => props.score);
</script>
