import type { SkillRef } from "~/data/skills";

export interface ExperienceItem {
  title: string
  subtitle: string
  date: string
  items: string[]
  skillRefs: SkillRef[]
}

export const experiences: ExperienceItem[] = [
  {
    title: "Software Engineer",
    subtitle: "Head-On Solutions GmbH, Nürnberg",
    date: "10/2024 – Heute",
    items: [
      "Entwicklung mit Vue.js, TypeScript und .NET",
      "Containerisierung und Deployment mit Docker",
      "Projektmanagement und -koordination",
    ],
    skillRefs: [
      { skill: "Vue.js", text: "Frontend-Entwicklung mit Vue 3 Composition API" },
      { skill: "TypeScript", text: "Durchgehende Typisierung im Full-Stack" },
      { skill: ".NET", text: "Backend-Entwicklung mit .NET" },
      { skill: "Docker", text: "Containerisierung und Deployment" },
      { skill: "Prompting", text: "KI-gestütztes Prompting im Entwicklungsprozess" },
    ],
  },
  {
    title: "DevOps Engineer",
    subtitle: "Siemens AG, Humboldtstraße",
    date: "04/2023 – 09/2024",
    items: [
      "CI/CD-Pipeline-Design und -Wartung",
      "Automatisierung mit PowerShell und Python",
      "REST-API-Entwicklung und -Integration",
    ],
    skillRefs: [
      { skill: "CI/CD", text: "Pipeline-Design und -Wartung" },
      { skill: "PowerShell", text: "Automatisierung von Infrastrukturprozessen" },
      { skill: "Python", text: "Scripting und Tooling-Automatisierung" },
      { skill: "REST APIs", text: "API-Entwicklung und -Integration" },
    ],
  },
  {
    title: "Rettungssanitäter im Rettungsdienst",
    subtitle: "BRK Kreisverband Fürth",
    date: "10/2022 – Heute",
    items: [
      "Lebensrettende Sofortmaßnahmen",
      "Taktische Kommunikation im Einsatz (Closed Loop, etc.)",
      "Vernetzung und Teamkoordination",
    ],
    skillRefs: [
      { skill: "Kommunikation", text: "Taktische Kommunikation im Einsatz" },
      { skill: "Teamarbeit", text: "Vernetzung und Teamkoordination" },
    ],
  },
];
