import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';


export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'], plugins: { js }, extends: ['js/recommended'],
    rules: {
      semi: ['error', 'always'],               // Requiere punto y coma
      quotes: ['error', 'single'],             // Usa comillas simples
      'no-var': 'error',                       // Prohíbe usar var
      'prefer-const': 'error',                 // Prefiere const si no se reasigna
    },
  },
  { files: ['**/*.{js,mjs,cjs,ts,mts,cts}'], languageOptions: { globals: globals.browser } },
  tseslint.configs.recommended,

]);
