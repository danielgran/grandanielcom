<template>
  <div>
    <SectionHeader description="Ausgewählte Projekte und akademische Arbeiten">Projekte</SectionHeader>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ProjectCard
        title="Frameworkanalyse React"
        subtitle="Bachelorarbeit · Note 1,1"
        icon="mdi:react"
        description="Extensives Lesen und Verstehen der React Rendering Engine. Performanceanalyse mittels praktischer Werkzeuge aus der Informatik (Zeitkomplexität, UX-Metriken)."
        :items="[
          'Tiefgehende Analyse der Reconciliation- und Rendering-Pipeline',
          'Performance-Benchmarking mit Zeitkomplexitätsmetriken',
          'Einarbeitung in den Rahmen der JavaScript-Entwicklung',
        ]"
        :tags="['React', 'JavaScript', 'Performance', 'Forschung']"
        link="/publications"
      />
      <ProjectCard
        title="Medikamentendosierer"
        subtitle="Projektarbeit"
        icon="mdi:medical-bag"
        description="Design und Entwicklung eines Medikamentendosierers mit eigenen Treiberschaltungen und Mikrocontrollerprogrammierung."
        :items="[
          'Treiberschaltungen für Bewegungssensorik',
          'MOSFET-Treiberschaltungsdesign',
          'Mikrocontrollerprogrammierung',
          'PCB-Design',
        ]"
        :tags="['Embedded', 'PCB', 'Hardware', 'C']"
      />
      <ProjectCard
        title="5G-Kommunikationsstrecke"
        subtitle="Entwicklungsprojekt"
        icon="mdi:antenna"
        description="Entwicklung einer 5G-Kommunikationsstrecke für Datenraten bis zu 10 Gbit/s."
        :items="[
          'Projektarbeit nach ISO 6541',
          'Fachwissen über Mobilfunkstrecken',
        ]"
        :tags="['5G', 'Telekommunikation', 'ISO 6541']"
      />
      <ProjectCard
        title="Arma 3 Spieleframework"
        subtitle="Privates Projekt"
        icon="mdi:gamepad-variant-outline"
        description="Entwicklung eines Spieleframeworks für Arma 3 mit Funktionserweiterungen und einem autarken Redis Connector."
        :items="[
          'Funktionserweiterungen in C und C# (.NET Standard)',
          'Entwicklung eines autarken Redis Connectors',
        ]"
        :tags="['C', 'C#', '.NET', 'Redis', 'Game Dev']"
      />
    </div>
  </div>
</template>
