import type { SkillRef } from "~/data/skills";

export interface ProjectItem {
  title: string
  subtitle: string
  icon: string
  description: string
  items: string[]
  skillRefs: SkillRef[]
  link?: string
}

export const projects: ProjectItem[] = [
  {
    title: "Frameworkanalyse React",
    subtitle: "Bachelorarbeit · Note 1,1",
    icon: "mdi:react",
    description:
      "Extensives Lesen und Verstehen der React Rendering Engine. Performanceanalyse mittels praktischer Werkzeuge aus der Informatik (Zeitkomplexität, UX-Metriken).",
    items: [
      "Tiefgehende Analyse der Reconciliation- und Rendering-Pipeline",
      "Performance-Benchmarking mit Zeitkomplexitätsmetriken",
      "Einarbeitung in den Rahmen der JavaScript-Entwicklung",
    ],
    skillRefs: [
      { skill: "React", text: "Tiefgehende Analyse der React Rendering Engine" },
      { skill: "JavaScript", text: "Einarbeitung in den JavaScript-Entwicklungsrahmen" },
      { skill: "Performance", text: "Performanceanalyse mit Zeitkomplexitätsmetriken" },
      { skill: "Forschung", text: "Wissenschaftliche Analyse und Evaluation" },
    ],
    link: "/publications",
  },
  {
    title: "Medikamentendosierer",
    subtitle: "Projektarbeit",
    icon: "mdi:medical-bag",
    description:
      "Design und Entwicklung eines Medikamentendosierers mit eigenen Treiberschaltungen und Mikrocontrollerprogrammierung.",
    items: [
      "Treiberschaltungen für Bewegungssensorik",
      "MOSFET-Treiberschaltungsdesign",
      "Mikrocontrollerprogrammierung",
      "PCB-Design",
    ],
    skillRefs: [
      { skill: "Embedded", text: "Mikrocontrollerprogrammierung" },
      { skill: "PCB", text: "PCB-Design für Treiberschaltungen" },
      { skill: "Hardware", text: "Treiberschaltungsdesign (MOSFET, Sensorik)" },
      { skill: "C", text: "Mikrocontrollerprogrammierung in C" },
    ],
  },
  {
    title: "5G-Kommunikationsstrecke",
    subtitle: "Entwicklungsprojekt",
    icon: "mdi:antenna",
    description:
      "Entwicklung einer 5G-Kommunikationsstrecke für Datenraten bis zu 10 Gbit/s.",
    items: [
      "Projektarbeit nach ISO 6541",
      "Fachwissen über Mobilfunkstrecken",
    ],
    skillRefs: [
      { skill: "5G", text: "Entwicklung einer 5G-Kommunikationsstrecke" },
      { skill: "Telekommunikation", text: "Fachwissen über Mobilfunkstrecken" },
      { skill: "ISO 6541", text: "Projektarbeit nach ISO 6541" },
    ],
  },
  {
    title: "Arma 3 Spieleframework",
    subtitle: "Privates Projekt",
    icon: "mdi:gamepad-variant-outline",
    description:
      "Entwicklung eines Spieleframeworks für Arma 3 mit Funktionserweiterungen und einem autarken Redis Connector.",
    items: [
      "Funktionserweiterungen in C und C# (.NET Standard)",
      "Entwicklung eines autarken Redis Connectors",
    ],
    skillRefs: [
      { skill: "C", text: "Funktionserweiterungen in C" },
      { skill: "C#", text: "Entwicklung in C# (.NET Standard)" },
      { skill: ".NET", text: "Framework-Entwicklung mit .NET Standard" },
      { skill: "Redis", text: "Entwicklung eines autarken Redis Connectors" },
      { skill: "Game Dev", text: "Spieleframework-Entwicklung" },
    ],
  },
];
