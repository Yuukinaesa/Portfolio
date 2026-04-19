import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

export default defineConfig([
  ...nextVitals,
  globalIgnores([".next/**", "out/**", "build/**", "node_modules/**"]),
  {
    rules: {
      "react/no-unescaped-entities": "off",
      "no-console": "warn",
      "no-debugger": "error",
      "no-eval": "error",
      "no-implied-eval": "error",
      "no-new-func": "error",
      "no-script-url": "error",
      "no-alert": "warn",
      "no-var": "error",
      "prefer-const": "error",
      eqeqeq: ["error", "always"],
      curly: ["warn", "multi-line"],
      "no-return-assign": "error",
      "no-throw-literal": "error",
      "react/self-closing-comp": "warn",
    },
  },
]);
