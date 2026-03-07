export enum SkillCategory {
  Languages = 'languages',
  Frameworks = 'frameworks',
  Databases = 'databases',
  DevOps = 'devops',
  IDEs = 'ides',
  Engineering = 'engineering',
  Science = 'science',
  SoftSkills = 'softskills',
  AI = 'ai',
}

export interface SkillReference {
  project: boolean
  title: string
  text: string
  link: string
}

export interface WorkSkillData {
  name: string
  icon?: string
  level?: string
  percentage?: number
  category: SkillCategory
  /** Alternative tag names this skill matches against (e.g. "C" for "C / C++") */
  matchTags?: readonly string[]
}

export class WorkSkill {
  readonly name: string
  readonly icon?: string
  readonly level?: string
  readonly percentage?: number
  readonly category: SkillCategory
  readonly matchTags: readonly string[]
  references: SkillReference[]

  constructor(data: WorkSkillData) {
    this.name = data.name
    this.icon = data.icon
    this.level = data.level
    this.percentage = data.percentage
    this.category = data.category
    this.matchTags = data.matchTags ?? []
    this.references = []
  }

  /** Check if a given tag matches this skill */
  matches(tag: string): boolean {
    const lower = tag.toLowerCase()
    return (
      this.name.toLowerCase() === lower
      || this.matchTags.some(t => t.toLowerCase() === lower)
    )
  }

  addReference(ref: SkillReference): void {
    // avoid duplicates
    const exists = this.references.some(
      r => r.project === ref.project && r.title === ref.title,
    )
    if (!exists) {
      this.references.push(ref)
    }
  }

  get hasReferences(): boolean {
    return this.references.length > 0
  }
}
