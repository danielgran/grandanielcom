<template>
  <div>
    <SectionHeader description="Was ich in meiner Freizeit mache">
      Hobbys
    </SectionHeader>

    <ul class="thread">
      <ThreadItem
        title="Bouldern & Klettern"
        description="Regelmäßige Indoor-Bouldering-Sessions — Problemlösung trifft auf körperliche Herausforderung."
      />
      <ThreadItem
        title="Boxen"
        description="Regelmäßiges Boxtraining für Fitness, Koordination und mentale Stärke."
      />
      <ThreadItem
        title="Katastrophenschutz"
        description="Aktive Teilnahme an Katastrophenschutz und Zivilschutzaktivitäten."
      />
      <ThreadItem
        title="Rettungs- und Sanitätsdienst"
        description="Ehrenamtlicher Rettungs- und Sanitätsdienst."
      />
      <ThreadItem
        title="Private IT-Projekte"
        description="Diverse private IT-Projekte — Homelab-Infrastruktur, Webentwicklung und Open-Source-Beiträge."
      />
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useHead } from "#app";

useHead({ title: "Hobbys" });
</script>
