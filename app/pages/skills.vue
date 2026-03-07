<template>
  <div>
    <SectionHeader description="Technische Fähigkeiten und Kenntnisstufen">Kenntnisse</SectionHeader>

    <div
      v-for="(cat, ci) in resolvedCategories"
      :key="cat.key"
      :class="ci < resolvedCategories.length - 1 ? 'mb-8' : ''"
    >
      <h3 class="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">{{ cat.label }}</h3>
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3">
        <SkillCard
          v-for="skill in cat.skills"
          :key="skill.name"
          :skill="skill"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSkillRegistry } from "~/composables/useSkillRegistry";

const { resolvedCategories } = useSkillRegistry();
</script>
