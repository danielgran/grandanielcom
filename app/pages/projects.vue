<template>
  <div>
    <SectionHeader description="Ausgewählte Projekte und akademische Arbeiten">Projekte</SectionHeader>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ProjectCard
        v-for="proj in projects"
        :key="proj.title"
        :id="slugify(proj.title)"
        :title="proj.title"
        :subtitle="proj.subtitle"
        :icon="proj.icon"
        :description="proj.description"
        :items="proj.items"
        :tags="proj.skillRefs.map(r => r.skill)"
        :link="proj.link"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { projects } from '~/data/projects'
import { slugify } from '~/data/skills'
</script>
