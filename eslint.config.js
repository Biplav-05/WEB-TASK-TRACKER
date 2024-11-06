// eslint.config.js
import { FlatCompat } from "@eslint/eslintrc";
import { defineConfig } from "eslint-define-config";

// This helps bring in older .eslintrc config
const compat = new FlatCompat();

export default defineConfig([
    ...compat.extends("airbnb-typescript"),
    {
        parser: "@typescript-eslint/parser",
        plugins: ["@typescript-eslint"],
        rules: {
            "no-console": "warn",
        },
    },
]);
