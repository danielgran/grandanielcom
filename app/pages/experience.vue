<template>
  <div>
    <SectionHeader description="Berufliche Stationen und Tätigkeiten">Berufserfahrung</SectionHeader>

    <ul class="timeline">
      <TimelineItem
        v-for="exp in experiences"
        :key="exp.title"
        :id="slugify(exp.title)"
        :title="exp.title"
        :subtitle="exp.subtitle"
        :date="exp.date"
        :items="exp.items"
        :tags="exp.skillRefs.map(r => r.skill)"
      />
    </ul>
  </div>
</template>

<script setup lang="ts">
import { experiences } from '~/data/experiences'
import { slugify } from '~/data/skills'
</script>
