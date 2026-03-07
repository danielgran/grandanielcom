import type { SkillCategory, SkillReference } from "~/types/WorkSkill";
import { WorkSkill } from "~/types/WorkSkill";
import { skillCategories, type SkillCategoryDef } from "~/data/skills";

interface CategoryEntry {
  key: SkillCategory
  label: string
  skills: WorkSkill[]
}

let initialized = false;
const categoryMap: CategoryEntry[] = [];
const allSkills: WorkSkill[] = [];

/** Creates WorkSkill instances from all defined skill categories. Called once by the plugin. */
export function initializeSkillStore() {
  if (initialized) return;
  initialized = true;

  for (const cat of skillCategories as readonly SkillCategoryDef[]) {
    const skills = cat.skills.map(s => new WorkSkill(s));
    categoryMap.push({ key: cat.key, label: cat.label, skills });
    allSkills.push(...skills);
  }
}

/** Registers a SkillReference against every skill that matches the given tag. */
export function addReference(tag: string, ref: SkillReference) {
  for (const skill of allSkills) {
    if (skill.matches(tag)) {
      skill.addReference(ref);
    }
  }
}

export interface ResolvedSkillCategory {
  key: SkillCategory
  label: string
  skills: WorkSkill[]
}

/** Returns only categories that contain at least one referenced skill. */
export function getResolvedCategories(): ResolvedSkillCategory[] {
  return categoryMap
    .map(cat => ({
      key: cat.key,
      label: cat.label,
      skills: cat.skills.filter(s => s.hasReferences),
    }))
    .filter(cat => cat.skills.length > 0);
}
