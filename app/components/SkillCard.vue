<template>
  <div
    class="skill-card-wrapper bg-white border border-gray-100 rounded-xl p-5 transition-shadow"
    :class="{ 'shadow-md': expanded, 'hover:shadow-md': !expanded, 'cursor-pointer': skill.hasReferences }"
    @click="toggle"
  >
    <div class="flex items-start gap-4">
      <div
        v-if="skill.icon"
        class="flex items-center justify-center w-10 h-10 rounded-lg bg-accent-50 text-accent-600 shrink-0"
      >
        <Icon
          :name="skill.icon"
          class="w-5 h-5"
        />
      </div>
      <div class="flex-1 min-w-0">
        <div class="flex items-center gap-1.5">
          <h3 class="text-sm font-semibold text-gray-900 mb-1">
            {{ skill.name }}
          </h3>
          <span
            v-if="skill.hasReferences"

            class="inline-flex items-center justify-center w-4 h-4 rounded-full bg-accent-100 text-accent-700 text-[10px] font-bold leading-none mb-1"
          >
            {{ skill.references.length }}
          </span>
          <Icon
            v-if="skill.hasReferences"
            :name="expanded ? 'mdi:chevron-up' : 'mdi:chevron-down'"
            class="w-4 h-4 text-gray-400 mb-1"
          />
        </div>
        <p
          v-if="level"
          class="text-xs text-gray-500 mb-2"
        >
          {{ level }}
        </p>
        <div
          v-if="skill.percentage != null"
          class="skill-progress"
        >
          <div
            class="skill-progress-fill"
            :style="{ width: skill.percentage + '%', background: barColor }"
          />
        </div>
      </div>
    </div>

    <div
      v-if="expanded && skill.hasReferences"
      class="skill-references"
    >
      <p class="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-2">
        Referenzen
      </p>
      <ul class="space-y-2">
        <li
          v-for="(skillRef, i) in skill.references"
          :key="i"
          class="skill-reference-item"
        >
          <Icon
            :name="skillRef.project ? 'mdi:folder-outline' : 'mdi:briefcase-outline'"
            class="w-3.5 h-3.5 text-accent-500 shrink-0 mt-0.5"
          />
          <div class="min-w-0 flex-1">
            <p class="text-xs text-gray-600 leading-relaxed">
              {{ skillRef.text }}
            </p>
            <NuxtLink
              :to="skillRef.link"
              class="inline-flex items-center gap-1 text-[11px] font-medium text-accent-600 hover:text-accent-800 transition-colors"
              @click.stop
            >
              {{ skillRef.title }}
              <Icon
                name="mdi:arrow-right"
                class="w-3 h-3"
              />
            </NuxtLink>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import type { WorkSkill } from "~/types/WorkSkill";
import { useSkillColor } from "~/composables/useSkillColor";
import { resolveSkillLevel } from "~/data/skills";

const props = defineProps<{
  skill: WorkSkill
}>();

const { barColor } = useSkillColor(() => props.skill.percentage);

const level = computed(() => resolveSkillLevel(props.skill.percentage));

const expanded = ref(false);

function toggle() {
  if (props.skill.hasReferences) {
    expanded.value = !expanded.value;
  }
}
</script>

<style scoped>
.skill-references {
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid #f3f4f6;
}

.skill-reference-item {
  display: flex;
  align-items: flex-start;
  gap: 8px;
}

.skill-progress {
  height: 4px;
  background: #f3f4f6;
  border-radius: 9999px;
  overflow: hidden;
}

.skill-progress-fill {
  height: 100%;
  border-radius: 9999px;
  transition: width 0.6s ease;
}
</style>
