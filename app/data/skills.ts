import { SkillCategory, type WorkSkillData } from "~/types/WorkSkill";

export interface SkillCategoryDef {
  readonly key: SkillCategory
  readonly label: string
  readonly skills: readonly WorkSkillData[]
}

function defineSkillCategories<const T extends readonly SkillCategoryDef[]>(
  categories: T,
): T {
  return categories;
}

export const skillCategories = defineSkillCategories([
  {
    key: SkillCategory.Languages,
    label: "Programmiersprachen",
    skills: [
      {
        name: "Vue.js",
        icon: "mdi:vuejs",
        percentage: 95,
        category: SkillCategory.Languages,
        matchTags: ["Nuxt"],
      },
      {
        name: "Nuxt",
        icon: "mdi:nuxt",
        percentage: 85,
        category: SkillCategory.Languages,
      },
      {
        name: "React",
        icon: "mdi:react",
        percentage: 65,
        category: SkillCategory.Languages,
      },
      {
        name: "TypeScript",
        icon: "mdi:language-typescript",
        percentage: 90,
        category: SkillCategory.Languages,
      },
      {
        name: "JavaScript",
        icon: "mdi:language-javascript",
        percentage: 90,
        category: SkillCategory.Languages,
      },
      {
        name: "Python",
        icon: "mdi:language-python",
        percentage: 85,
        category: SkillCategory.Languages,
      },
      {
        name: "C / C++",
        icon: "mdi:language-c",
        percentage: 70,
        category: SkillCategory.Languages,
        matchTags: ["C", "C++"] as const,
      },
      {
        name: "C#",
        icon: "mdi:language-csharp",
        percentage: 65,
        category: SkillCategory.Languages,
      },
      {
        name: "Java",
        icon: "mdi:language-java",
        percentage: 70,
        category: SkillCategory.Languages,
      },
      {
        name: "SQL",
        icon: "mdi:database",
        percentage: 75,
        category: SkillCategory.Languages,
      },
    ],
  },
  {
    key: SkillCategory.Databases,
    label: "Datenbanken",
    skills: [
      {
        name: "PostgreSQL",
        icon: "mdi:elephant",
        percentage: 75,
        category: SkillCategory.Databases,
      },
      {
        name: "MySQL",
        icon: "mdi:database",
        percentage: 70,
        category: SkillCategory.Databases,
      },
      {
        name: "MS SQL",
        icon: "mdi:microsoft",
        percentage: 65,
        category: SkillCategory.Databases,
      },
      {
        name: "Redis",
        icon: "mdi:memory",
        percentage: 65,
        category: SkillCategory.Databases,
      },
      {
        name: "RabbitMQ",
        icon: "mdi:memory",
        percentage: 75,
        category: SkillCategory.Databases,
      },
    ],
  },
  {
    key: SkillCategory.APIs,
    label: "APIs, Frameworks & Protokolle",
    skills: [
      {
        name: "Open AI",
        icon: "mdi:robot",
        percentage: 75,
        category: SkillCategory.APIs,
      },
      {
        name: "Medusa.js",
        icon: "mdi:store",
        percentage: 95,
        category: SkillCategory.APIs,
      },
      {
        name: "JVM TI",
        icon: "mdi:server",
        percentage: 65,
        category: SkillCategory.APIs,
      },
      {
        name: "SEO",
        icon: "mdi:google",
        percentage: 84,
        category: SkillCategory.APIs,
      },
    ],
  },
  {
    key: SkillCategory.DevOps,
    label: "DevOps & Tools",
    skills: [
      {
        name: "Git",
        icon: "mdi:git",
        percentage: 100,
        category: SkillCategory.DevOps,
      },
      {
        name: "Docker",
        icon: "mdi:docker",
        percentage: 85,
        category: SkillCategory.DevOps,
      },
      {
        name: "Kubernetes",
        icon: "mdi:kubernetes",
        percentage: 70,
        category: SkillCategory.DevOps,
      },
      {
        name: "CI/CD",
        icon: "mdi:sync",
        percentage: 80,
        category: SkillCategory.DevOps,
      },
      {
        name: "PowerShell",
        icon: "mdi:powershell",
        percentage: 70,
        category: SkillCategory.DevOps,
      },
      {
        name: "Bash",
        icon: "mdi:console",
        percentage: 80,
        category: SkillCategory.DevOps,
      },
      {
        name: "vSphere",
        icon: "mdi:server",
        percentage: 65,
        category: SkillCategory.DevOps,
      },
    ],
  },
  {
    key: SkillCategory.IDEs,
    label: "Entwicklungsumgebungen",
    skills: [
      {
        name: "VS Code",
        icon: "mdi:microsoft-visual-studio-code",
        percentage: 95,
        category: SkillCategory.IDEs,
      },
      {
        name: "IntelliJ",
        icon: "mdi:intellij-idea",
        percentage: 85,
        category: SkillCategory.IDEs,
      },
      {
        name: "PyCharm",
        icon: "mdi:code-braces-box",
        percentage: 95,
        category: SkillCategory.IDEs,
      },
      {
        name: "WebStorm",
        icon: "mdi:web",
        percentage: 70,
        category: SkillCategory.IDEs,
      },
    ],
  },
  {
    key: SkillCategory.Engineering,
    label: "Engineering",
    skills: [
      {
        name: "Software Architektur",
        icon: "mdi:architecture",
        category: SkillCategory.Engineering,
      },
      {
        name: "Projektmanagement",
        icon: "mdi:clipboard-list",
        category: SkillCategory.Engineering,
      },
      {
        name: "Embedded",
        icon: "mdi:chip",
        category: SkillCategory.Engineering,
      },
      {
        name: "PCB",
        icon: "mdi:developer-board",
        category: SkillCategory.Engineering,
      },
      {
        name: "Hardware",
        icon: "mdi:wrench",
        category: SkillCategory.Engineering,
      },
      { name: "5G", icon: "mdi:antenna", category: SkillCategory.Engineering },
      {
        name: "Telekommunikation",
        icon: "mdi:cellphone-link",
        category: SkillCategory.Engineering,
      },
      {
        name: "ISO 6541",
        icon: "mdi:certificate-outline",
        category: SkillCategory.Engineering,
      },
      {
        name: "Game Dev",
        icon: "mdi:gamepad-variant",
        category: SkillCategory.Engineering,
      },
    ],
  },
  {
    key: SkillCategory.Science,
    label: "Science",
    skills: [
      {
        name: "Forschung",
        icon: "mdi:beaker-outline",
        category: SkillCategory.Science,
      },
      {
        name: "Performance",
        icon: "mdi:speedometer",
        category: SkillCategory.Science,
      },
      { name: "RAFT", icon: "mdi:server", category: SkillCategory.Science },
    ],
  },
  {
    key: SkillCategory.SoftSkills,
    label: "Soft Skills",
    skills: [
      {
        name: "Kommunikation",
        icon: "mdi:forum",
        category: SkillCategory.SoftSkills,
      },
      {
        name: "Teamarbeit",
        icon: "mdi:account-group",
        category: SkillCategory.SoftSkills,
      },
    ],
  },
  {
    key: SkillCategory.AI,
    label: "Artificial Intelligence",
    skills: [
      { name: "Prompting", icon: "mdi:robot", category: SkillCategory.AI },
    ],
  },
]);

// Derive SkillTag union type from skill definitions
type AllSkills = (typeof skillCategories)[number]["skills"][number];
type SkillName = AllSkills["name"];
type SkillsWithMatchTags = Extract<
  AllSkills,
  { readonly matchTags: readonly string[] }
>;
type MatchTag = SkillsWithMatchTags["matchTags"][number];

/** Union of all valid skill tag strings — derived from skill names + matchTags */
export type SkillTag = SkillName | MatchTag;

export interface SkillRef {
  skill: SkillTag
  text: string
}

export function resolveSkillLevel(percentage: number | undefined): string | undefined {
  if (percentage == null) return undefined;
  if (percentage >= 95) return "Experte";
  if (percentage >= 80) return "Fortgeschritten";
  if (percentage >= 60) return "Mittel";
  return "Einsteiger";
}

export function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/[äöüß]/g, (c) => {
      const map: Record<string, string> = {
        ä: "ae",
        ö: "oe",
        ü: "ue",
        ß: "ss",
      };
      return map[c] ?? c;
    })
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
