import { SkillCategory, type WorkSkillData } from '~/types/WorkSkill'

export interface SkillCategoryDef {
  readonly key: SkillCategory
  readonly label: string
  readonly skills: readonly WorkSkillData[]
}

function defineSkillCategories<const T extends readonly SkillCategoryDef[]>(categories: T): T {
  return categories
}

export const skillCategories = defineSkillCategories([
  {
    key: SkillCategory.Languages,
    label: 'Programmiersprachen',
    skills: [
      { name: 'TypeScript', icon: 'mdi:language-typescript', level: 'Fortgeschritten', percentage: 90, category: SkillCategory.Languages },
      { name: 'JavaScript', icon: 'mdi:language-javascript', level: 'Fortgeschritten', percentage: 90, category: SkillCategory.Languages },
      { name: 'Python', icon: 'mdi:language-python', level: 'Fortgeschritten', percentage: 85, category: SkillCategory.Languages },
      { name: 'C / C++', icon: 'mdi:language-c', level: 'Mittel', percentage: 70, category: SkillCategory.Languages, matchTags: ['C', 'C++'] as const },
      { name: 'C#', icon: 'mdi:language-csharp', level: 'Mittel', percentage: 65, category: SkillCategory.Languages },
      { name: 'Java', icon: 'mdi:language-java', level: 'Mittel', percentage: 70, category: SkillCategory.Languages },
      { name: 'SQL', icon: 'mdi:database', level: 'Mittel', percentage: 75, category: SkillCategory.Languages },
    ],
  },
  {
    key: SkillCategory.Frameworks,
    label: 'Frameworks & Bibliotheken',
    skills: [
      { name: 'Vue.js', icon: 'mdi:vuejs', level: 'Fortgeschritten', percentage: 90, category: SkillCategory.Frameworks },
      { name: 'React', icon: 'mdi:react', level: 'Fortgeschritten', percentage: 85, category: SkillCategory.Frameworks },
      { name: 'Angular', icon: 'mdi:angular', level: 'Mittel', percentage: 70, category: SkillCategory.Frameworks },
      { name: '.NET', icon: 'mdi:dot-net', level: 'Mittel', percentage: 70, category: SkillCategory.Frameworks },
      { name: 'Node.js', icon: 'mdi:nodejs', level: 'Fortgeschritten', percentage: 80, category: SkillCategory.Frameworks },
      { name: 'REST APIs', icon: 'mdi:api', level: 'Fortgeschritten', percentage: 80, category: SkillCategory.Frameworks },
      { name: 'Protobuf', icon: 'mdi:code-braces', level: 'Mittel', percentage: 60, category: SkillCategory.Frameworks },
    ],
  },
  {
    key: SkillCategory.Databases,
    label: 'Datenbanken',
    skills: [
      { name: 'PostgreSQL', icon: 'mdi:elephant', level: 'Mittel', percentage: 75, category: SkillCategory.Databases },
      { name: 'MySQL', icon: 'mdi:database', level: 'Mittel', percentage: 70, category: SkillCategory.Databases },
      { name: 'MS SQL', icon: 'mdi:microsoft', level: 'Mittel', percentage: 65, category: SkillCategory.Databases },
      { name: 'Redis', icon: 'mdi:memory', level: 'Mittel', percentage: 65, category: SkillCategory.Databases },
    ],
  },
  {
    key: SkillCategory.DevOps,
    label: 'DevOps & Tools',
    skills: [
      { name: 'Git', icon: 'mdi:git', level: 'Fortgeschritten', percentage: 90, category: SkillCategory.DevOps },
      { name: 'Docker', icon: 'mdi:docker', level: 'Fortgeschritten', percentage: 85, category: SkillCategory.DevOps },
      { name: 'Kubernetes', icon: 'mdi:kubernetes', level: 'Mittel', percentage: 70, category: SkillCategory.DevOps },
      { name: 'CI/CD', icon: 'mdi:sync', level: 'Fortgeschritten', percentage: 80, category: SkillCategory.DevOps },
      { name: 'PowerShell', icon: 'mdi:powershell', level: 'Mittel', percentage: 70, category: SkillCategory.DevOps },
      { name: 'Bash', icon: 'mdi:console', level: 'Fortgeschritten', percentage: 80, category: SkillCategory.DevOps },
      { name: 'vSphere', icon: 'mdi:server', level: 'Mittel', percentage: 65, category: SkillCategory.DevOps },
      { name: 'Proxmox', icon: 'mdi:server-network', level: 'Mittel', percentage: 65, category: SkillCategory.DevOps },
    ],
  },
  {
    key: SkillCategory.IDEs,
    label: 'Entwicklungsumgebungen',
    skills: [
      { name: 'VS Code', icon: 'mdi:microsoft-visual-studio-code', level: 'Täglich', percentage: 95, category: SkillCategory.IDEs },
      { name: 'IntelliJ', icon: 'mdi:intellij-idea', category: SkillCategory.IDEs },
      { name: 'PyCharm', icon: 'mdi:code-braces-box', category: SkillCategory.IDEs },
      { name: 'WebStorm', icon: 'mdi:web', category: SkillCategory.IDEs },
    ],
  },
  {
    key: SkillCategory.Engineering,
    label: 'Engineering',
    skills: [
      { name: 'Embedded', icon: 'mdi:chip', category: SkillCategory.Engineering },
      { name: 'PCB', icon: 'mdi:developer-board', category: SkillCategory.Engineering },
      { name: 'Hardware', icon: 'mdi:wrench', category: SkillCategory.Engineering },
      { name: '5G', icon: 'mdi:antenna', category: SkillCategory.Engineering },
      { name: 'Telekommunikation', icon: 'mdi:cellphone-link', category: SkillCategory.Engineering },
      { name: 'ISO 6541', icon: 'mdi:certificate-outline', category: SkillCategory.Engineering },
      { name: 'Game Dev', icon: 'mdi:gamepad-variant', category: SkillCategory.Engineering },
    ],
  },
  {
    key: SkillCategory.Science,
    label: 'Science',
    skills: [
      { name: 'Forschung', icon: 'mdi:beaker-outline', category: SkillCategory.Science },
      { name: 'Performance', icon: 'mdi:speedometer', category: SkillCategory.Science },
    ],
  },
  {
    key: SkillCategory.SoftSkills,
    label: 'Soft Skills',
    skills: [
      { name: 'Kommunikation', icon: 'mdi:forum', category: SkillCategory.SoftSkills },
      { name: 'Teamarbeit', icon: 'mdi:account-group', category: SkillCategory.SoftSkills },
    ],
  },
  {
    key: SkillCategory.AI,
    label: 'Artificial Intelligence',
    skills: [
      { name: 'Prompting', icon: 'mdi:robot', category: SkillCategory.AI },
    ],
  },
])

// Derive SkillTag union type from skill definitions
type AllSkills = typeof skillCategories[number]['skills'][number]
type SkillName = AllSkills['name']
type SkillsWithMatchTags = Extract<AllSkills, { readonly matchTags: readonly string[] }>
type MatchTag = SkillsWithMatchTags['matchTags'][number]

/** Union of all valid skill tag strings — derived from skill names + matchTags */
export type SkillTag = SkillName | MatchTag

export interface SkillRef {
  skill: SkillTag
  text: string
}

export function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/[äöüß]/g, (c) => {
      const map: Record<string, string> = { "ä": "ae", "ö": "oe", "ü": "ue", "ß": "ss" }
      return map[c] ?? c
    })
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}
