import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";


export default [
  {
    "settings": {
      "react": {
        "version": "detect"
      }
    },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn"
    },
  },
  { ignores: ["webpack*.js", "*.config.js"]},
  {files: ["src/**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
];