# Copilot Instructions

> This project is a nuxt 3 application.

## General Guidelines

- Only use comments if they are necessary to explain complex logic
- Always use absolute imports
- Use double quote syntax for strings

## HTML Guidelines

- Avoid unnecessary div nesting; nested divs should have multiple classes to justify their existence

## TypeScript Guidelines

- Do not write imports for framework types, e.g. `import { defineComponent } from "vue"`. Autoimports are enabled.
- Write Imports for all other explicitly used types.
- For inline null or undefined checks, always use `??` instead of `||` unless checking for falsy values is intended.

### TypeScript class, interface and enum Structure

```ts
// ExampleClass.ts

export default class ExampleClass {
  propertyName: string;

  constructor(value: ExampleClass) {
    Object.assign(this, value);
  }
}
```

```ts
// ExampleInterface.ts

export default interface ExampleInterface {
  propertyName: string;
}
```

```ts
// ExampleEnum.ts

enum ExampleEnum {
  OPTION_A,
  OPTION_B,
}
export default ExampleEnum;
```

## SCSS Guidelines

- Whenever possible, use css mixins defined in `src/assets/css/mixins.scss`
- Whenever possible use scss classes defined in `src/assets/css/main.scss`
- For margins/paddings greater than `1rem` always use scss variables defined in `src/assets/css/variables.scss` (gap)
- Do never use `!important`
- Do never exceed 4 levels of nesting in scss
- Do never use bootstrap, tailwind, or any other CSS framework syntax
- Do never define new scss variables or mixins in the component
- Do never give html-elements classes if they do not get used
- Use `@use` instead of `@import`
- **Put scss classes next to each other only within the root scss-class**
- Only use scss-class specific media queries
- Only use scss variables defined in `src/assets/css/variables.scss`

## Styling Conventions

- Always use margin-top for vertical spacing between elements, never margin-bottom.

## Vue Guidelines

- Use `<script lang="ts" setup>` for all Vue components
- Reuse Base Components from `src/components/Base/` whenever possible
- For boolean props, use the shorthand attribute name instead of `:prop="true"`, e.g. `new-tab` instead of `:newTab="true"`

## Vue Component Structure

ALWAYS ADHERE TO THE SCSS STYLING STRUCTURE!!!

```vue
<template>
  <div class="component-name"></div>
</template>

<script lang="ts" setup>
// Import section

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
});

const emit = defineEmits<{
  eventName: [];
}>();

// put all component logic here

defineExpose({
  // Expose component methods or properties if needed
});
</script>

<style lang="scss" scoped>
.component-name {
  // All component styles must go here. Do not open another root scss class.

  &:focus {
    ...
  }

  .component-name-sub-class {
    // Sub class styles
  }
}
NEVER NEVER NEVER TOUCH THIS AREA!!!!
</style>
```

## Unit Tests

- Follow Arrange-Act-Assert pattern.
