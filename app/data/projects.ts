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
    title: "heartbeat.systems Serverhosting",
    subtitle: "Serverhosting-Dienst",
    icon: "mdi:react",
    description:
      "Entwicklung eines dezentralen Orchestrierungsdienstes für die Verwaltung von Serverinfrastrukturen mit Fokus auf Performance und Skalierbarkeit.",
    items: [
      "Containerd basierte dezentrale Orchestrierungsplatform",
      "Implementierung des RAFT Algorithmus von Ongardo",
      "Event Driven Architecture mit Message Queueing",
    ],
    skillRefs: [
      { skill: "Nuxt", text: "Erstellung einer SEO-optimierten Webanwendung" },
      {
        skill: "TypeScript",
        text: "Webprojekt",
      },
      {
        skill: "React",
        text: "Modulerweiterungen für medusa.js Store API",
      },
      { skill: "PostgreSQL", text: "Verwendung als Datenbank Layer" },
      { skill: "Python", text: "Backend-Entwicklung" },
      { skill: "RabbitMQ", text: "Message Queueing" },
      { skill: "C++", text: "JVM TI Entwicklung Mit Echtzeit Stack" },
      { skill: "Medusa.js", text: "Betrieb eines E-Commerce-Systems" },
      { skill: "JVM TI", text: "Echzeit Objektanalyse als .so Modul" },
      {
        skill: "RAFT",
        text: "Implementierung eines dezentralen Leader Election Algorithmus basierent auf Ongardo.",
      },
      {
        skill: "Software Architektur",
        text: "Design einer Event Driven Architecture mit Fokus auf Performance und Skalierbarkeit",
      },
    ],
    link: "https://www.heartbeat.systems/",
  },
  {
    title: "markdownstud.io (Studienprojekt; WIP)",
    subtitle: "WYSIWYG Blog-Editors mit KI Integration",
    icon: "mdi:pen",
    description:
      "Markdown-basierter Texteditor mit Ziel über formulierung eines Kerngedanken sowie einer Zielgruppe den Schreibprozess erheblich zu beschleunigen.",
    items: [
      "Tiefgehende Analyse der Reconciliation- und Rendering-Pipeline",
      "Performance-Benchmarking mit Zeitkomplexitätsmetriken",
      "Einarbeitung in den Rahmen der JavaScript-Entwicklung",
    ],
    skillRefs: [
      { skill: "Nuxt", text: "Erstellung einer SEO-optimierten Webanwendung" },
      {
        skill: "TypeScript",
        text: "Durchgehende Typisierung im Full-Stack über mehrere Layer",
      },
      {
        skill: "Open AI",
        text: "Durchgehende Typisierung im Full-Stack über mehrere Layer",
      },

      {
        skill: "Software Architektur",
        text: "Planung und Umsetzung nach Wasserfallmodell (hybrid)",
      },
    ],
    link: "https://markdownstud.io/",
  },
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
      {
        skill: "React",
        text: "Tiefgehende Analyse der React Rendering Engine",
      },
      {
        skill: "JavaScript",
        text: "Einarbeitung in den JavaScript-Entwicklungsrahmen",
      },
      {
        skill: "Performance",
        text: "Performanceanalyse mit Zeitkomplexitätsmetriken",
      },
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
    items: ["Projektarbeit nach ISO 6541", "Fachwissen über Mobilfunkstrecken"],
    skillRefs: [
      { skill: "5G", text: "Entwicklung einer 5G-Kommunikationsstrecke" },
      { skill: "Telekommunikation", text: "Fachwissen über Mobilfunkstrecken" },
      { skill: "ISO 6541", text: "Projektarbeit nach ISO 6541" },
    ],
  },
  {
    title: "yearsinpixels.com",
    subtitle: "Privates Projekt",
    icon: "mdi:calendar-month",
    description:
      "Webanwendung zum täglichen Mood-Tracking: Jedem Tag im Jahr wird ein farbiges Pixel zugewiesen, um die eigene Stimmung über das gesamte Jahr hinweg visuell nachzuvollziehen.",
    items: [
      "Intuitive Jahresübersicht mit farbcodierten Mood-Pixeln",
      "Tägliche Erfassung der Stimmung mit minimalem Aufwand",
      "Persistente Datenhaltung mit PostgreSQL",
      "Entwicklung einer eigenen Query Engine für flexible Datenabfragen",
    ],
    skillRefs: [
      { skill: "Vue.js", text: "Frontend-Entwicklung der Mood-Tracking-App" },
      { skill: "Python", text: "Backend: Authentication und Query Engine, kein ERM" },
      { skill: "PostgreSQL", text: "Persistente Speicherung der Mood-Daten" },
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
