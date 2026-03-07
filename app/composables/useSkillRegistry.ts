import { getResolvedCategories, type ResolvedSkillCategory } from "~/composables/skillStore";

export function useSkillRegistry() {
  const resolvedCategories: ResolvedSkillCategory[] = getResolvedCategories();

  return {
    resolvedCategories,
  };
}
