import coreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

/**
 * eslint-config-next v16 exports native flat configs, so we spread them
 * directly (no FlatCompat shim).
 */
const eslintConfig = [
  { ignores: [".next/**", "node_modules/**"] },
  ...coreWebVitals,
  ...nextTypescript,
];

export default eslintConfig;
