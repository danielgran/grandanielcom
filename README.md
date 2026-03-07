# grandanielcom

Personal portfolio built with Nuxt 4.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server on `http://localhost:3000` |
| `npm run build` | Typecheck + lint + build for production |
| `npm run preview` | Preview production build |
| `npm run typecheck` | Run `vue-tsc --noEmit` |
| `npm run lint` | Run ESLint |
| `npm test` | Run Vitest |

> `postinstall` automatically runs `nuxt prepare` after `npm install`.

## Skill Registry

Skills are defined once in `app/data/skills.ts`. Each experience and project entry in `app/data/` declares `skillRefs` — a typed list of `{ skill, text }` pairs describing how the skill was used.

On app startup a Nuxt plugin (`app/plugins/skill-references.ts`) pre-registers all references into a module-level store (`app/composables/skillStore.ts`). The `/skills` page resolves and displays only referenced skills grouped by category, with expandable panels linking back to the source entries.

| File | Purpose |
|---|---|
| `app/data/skills.ts` | Skill definitions, `SkillTag` type, `SkillRef` interface |
| `app/composables/skillStore.ts` | Singleton store — init, add, resolve |
| `app/composables/useSkillReference.ts` | Composable wrapper for `addReference` |
| `app/plugins/skill-references.ts` | Pre-registers all refs at startup |

## Dependencies

| Package | Type |
|---|---|
| `nuxt ^4.3.1` | dependency |
| `@nuxt/eslint ^1.15.2` | devDependency |
| `@nuxt/icon ^2.2.1` | devDependency |
| `@nuxtjs/tailwindcss ^6.14.0` | devDependency |
| `sass ^1.97.3` | devDependency |
