import { defineNuxtPlugin } from "#app"
import { initializeSkillStore } from "~/composables/skillStore"
import { useSkillReference } from "~/composables/useSkillReference"
import { slugify } from "~/data/skills"
import { experiences } from "~/data/experiences"
import { projects } from "~/data/projects"

export default defineNuxtPlugin(() => {
  initializeSkillStore()

  for (const exp of experiences) {
    for (const ref of exp.skillRefs) {
      useSkillReference(ref.skill, {
        project: false,
        title: exp.title,
        text: ref.text,
        link: `/experience#${slugify(exp.title)}`,
      })
    }
  }

  for (const proj of projects) {
    for (const ref of proj.skillRefs) {
      useSkillReference(ref.skill, {
        project: true,
        title: proj.title,
        text: ref.text,
        link: `/projects#${slugify(proj.title)}`,
      })
    }
  }
})
