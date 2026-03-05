<template>
  <div>
    <SectionHeader description="Berufliche Stationen und Tätigkeiten">Berufserfahrung</SectionHeader>

    <ul class="timeline">
      <TimelineItem
        title="Software Engineer"
        subtitle="Head-On Solutions GmbH, Nürnberg"
        date="10/2024 – Heute"
        :items="[
          'Entwicklung mit Vue.js, TypeScript und .NET',
          'Containerisierung und Deployment mit Docker',
          'Projektmanagement und -koordination',
        ]"
        :tags="['Vue.js', 'TypeScript', '.NET', 'Docker', 'Project']"
      />
      <TimelineItem
        title="DevOps Engineer"
        subtitle="Siemens AG, Humboldtstraße"
        date="04/2023 – 09/2024"
        :items="[
          'CI/CD-Pipeline-Design und -Wartung',
          'Automatisierung mit PowerShell und Python',
          'REST-API-Entwicklung und -Integration',
        ]"
        :tags="['CI/CD', 'PowerShell', 'Python', 'REST APIs', 'DevOps']"
      />
      <TimelineItem
        title="Rettungssanitäter im Rettungsdienst"
        subtitle="BRK Kreisverband Fürth"
        date="10/2022 – Heute"
        :items="[
          'Lebensrettende Sofortmaßnahmen',
          'Taktische Kommunikation im Einsatz (Closed Loop, etc.)',
          'Vernetzung und Teamkoordination',
        ]"
        :tags="['Rettungsdienst', 'Kommunikation', 'Teamarbeit']"
      />
    </ul>
  </div>
</template>
