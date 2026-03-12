<template>
  <div>
    <SectionHeader description="Ausgewählte Projekte und akademische Arbeiten">
      Projekte
    </SectionHeader>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ProjectCard
        v-for="proj in projects"
        :id="slugify(proj.title)"
        :key="proj.title"
        :title="proj.title"
        :subtitle="proj.subtitle"
        :icon="proj.icon"
        :description="proj.description"
        :items="proj.items"
        :skill-refs="proj.skillRefs"
        :link="proj.link"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHead } from "#app";
import { projects } from "~/data/projects";
import { slugify } from "~/data/skills";

useHead({ title: "Projekte" });
</script>
