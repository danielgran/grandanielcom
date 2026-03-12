<template>
  <div>
    <SectionHeader description="Technische Fähigkeiten und Kenntnisstufen.">
      Kenntnisse
    </SectionHeader>

    <div class="mb-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
      <p class="text-sm text-yellow-900">
        <strong>Verlinkte Kenntnisse:</strong> Alle Kenntnisse sind nachverfolgbar wie diese verwendet wurden. Einfach klicken!
      </p>
    </div>

    <div
      v-for="(cat, ci) in resolvedCategories"
      :key="cat.key"
      :class="ci < resolvedCategories.length - 1 ? 'mb-8' : ''"
    >
      <h3 class="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
        {{ cat.label }}
      </h3>
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3 items-start">
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
import { useHead } from "#app";
import { useSkillRegistry } from "~/composables/useSkillRegistry";

useHead({ title: "Kenntnisse" });

const { resolvedCategories } = useSkillRegistry();
</script>
