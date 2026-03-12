<template>
  <div>
    <SectionHeader description="Zertifizierungen und nennenswerte Erfolge">
      Erfolge
    </SectionHeader>

    <ul class="thread">
      <ThreadItem
        title="Berechtigung zur Führung der Berufsbezeichnung Ingenieur"
        date="2024"
        description="Gem. Art. 2 Abs. 1 BayIngG — Berechtigung zur Führung der Berufsbezeichnung ‚Ingenieur'."
      />
      <ThreadItem
        title="Bachelor of Engineering"
        date="2024"
        description="B.Eng. in Elektro- und Informationstechnik an der TH Nürnberg erfolgreich abgeschlossen."
      />
      <ThreadItem
        title="Rettungssanitäter (RS)"
        date="2023"
        description="Staatlich geprüfter Rettungssanitäter — ASB Schulen, Lauf."
      />
      <ThreadItem
        title="Fachinformatiker – Anwendungsentwicklung"
        date="2023"
        description="IHK-Ausbildung zum Fachinformatiker für Anwendungsentwicklung bei ProLeiT GmbH abgeschlossen."
      />
      <ThreadItem
        title="Fachgebundene Hochschulreife"
        date="2019"
        description="Fachrichtung Technik — Max Grundig Schule, Fürth."
      />
      <ThreadItem
        title="Mittlere Reife"
        date="2019"
        description="Staatliche Realschule Zirndorf."
      />
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useHead } from "#app";

useHead({ title: "Erfolge" });
</script>
