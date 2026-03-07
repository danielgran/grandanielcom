import type { SkillReference } from "~/types/WorkSkill";
import type { SkillTag } from "~/data/skills";
import { addReference } from "~/composables/skillStore";

export function useSkillReference(tag: SkillTag, ref: SkillReference) {
  addReference(tag, ref);
}
