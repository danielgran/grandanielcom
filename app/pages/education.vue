<template>
  <div>
    <SectionHeader description="Akademischer Werdegang und Qualifikationen">Ausbildung</SectionHeader>

    <ul class="timeline">
      <TimelineItem
        title="M.Sc. Informatik (Fernstudium, Vollzeit)"
        subtitle="IU Internationale Hochschule"
        date="10/2024 – voraussichtlich 2027"
        description="Master of Science im Fernstudium (Vollzeit)."
      />
      <TimelineItem
        title="B.Eng. Elektro- und Informationstechnik"
        subtitle="Technische Hochschule Nürnberg"
        date="08/2020 – 08/2024"
        description="Bachelor of Engineering in Elektro- und Informationstechnik."
      />
      <TimelineItem
        title="Fachinformatiker – Anwendungsentwicklung (IHK)"
        subtitle="ProLeiT GmbH, Herzogenaurach"
        date="09/2019 – 03/2023"
        description="Ausbildung zum Fachinformatiker für Anwendungsentwicklung."
      />
      <TimelineItem
        title="Fachgebundene Hochschulreife"
        subtitle="Max Grundig Schule, Fürth"
        date="09/2017 – 07/2019"
        description="Fachrichtung Technik."
      />
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useHead } from "#app";

useHead({ title: "Ausbildung" });
</script>
