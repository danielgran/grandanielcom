import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt({
  rules: {
    "@stylistic/arrow-parens": "off",
    "@stylistic/operator-linebreak": "off",
    // Formatting rules to replace Prettier
    "@stylistic/indent": ["error", 2],
    "@stylistic/quotes": ["error", "double"],
    "@stylistic/semi": ["error", "always"],
    "@stylistic/no-multiple-empty-lines": ["error", { max: 1 }],
    "@stylistic/eol-last": ["error", "always"],
    "@stylistic/space-before-function-paren": [
      "error",
      {
        anonymous: "always",
        named: "never",
        asyncArrow: "always",
      },
    ],
    "@stylistic/space-infix-ops": "error",
    "@stylistic/key-spacing": [
      "error",
      { beforeColon: false, afterColon: true },
    ],
    "@stylistic/object-curly-spacing": ["error", "always"],
    "@stylistic/array-bracket-spacing": ["error", "never"],
    "@stylistic/computed-property-spacing": ["error", "never"],
    "@stylistic/space-before-blocks": "error",
    "@stylistic/keyword-spacing": "error",
    "@stylistic/no-trailing-spaces": "error",
    "@stylistic/spaced-comment": ["error", "always"],

    // Vue template formatting (prettier-like)
    "vue/html-indent": ["error", 2],
    "vue/max-attributes-per-line": ["error", { singleline: 1, multiline: 1 }],
    "vue/first-attribute-linebreak": [
      "error",
      { singleline: "beside", multiline: "below" },
    ],
    "vue/html-closing-bracket-newline": [
      "error",
      { singleline: "never", multiline: "always" },
    ],
    "vue/multiline-html-element-content-newline": "error",
    "vue/singleline-html-element-content-newline": "error",
    "vue/html-self-closing": [
      "error",
      {
        html: { void: "always", normal: "always", component: "always" },
        svg: "always",
        math: "always",
      },
    ],
  },
});
