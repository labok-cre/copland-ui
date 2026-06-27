import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y'
import vitestPlugin from '@vitest/eslint-plugin'
import prettierPlugin from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'
import storybookPlugin from 'eslint-plugin-storybook'

export default tseslint.config(
  // ESLint推奨のJavaScript基本ルール
  js.configs.recommended,

  // TypeScriptの推奨ルール
  ...tseslint.configs.recommended,

  // Reactプラグインの設定（Flat Config互換）
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat['jsx-runtime'],

  // アクセシビリティ（A11y）設定
  jsxA11yPlugin.flatConfigs.recommended,

  // React Hooks設定 (Flat Configに直接マッピング)
  {
    plugins: {
      'react-hooks': reactHooksPlugin,
    },
    rules: {
      ...reactHooksPlugin.configs.recommended.rules,
    },
  },

  // Vitestテストファイル専用の設定
  {
    files: ['**/*.test.{ts,tsx,js,jsx}', '**/*.spec.{ts,tsx,js,jsx}'],
    plugins: {
      vitest: vitestPlugin,
    },
    rules: {
      ...vitestPlugin.configs.recommended.rules,
    },
  },

  // Storybookプラグイン設定
  ...storybookPlugin.configs['flat/recommended'],

  // Prettierの統合設定（競合する他のフォーマットルールを無効化）
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'error',
      ...prettierConfig.rules,
    },
  },

  // カスタムルール及びプロジェクト設定
  {
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off', // Next.jsではReactのインポートは不要なため無効化
    },
  },

  // 無視するファイル・フォルダの指定
  {
    ignores: [
      '.next/**',
      'node_modules/**',
      'dist/**',
      'build/**',
      'storybook-static/**',
      'next-env.d.ts',
      '.stylelintrc.js',
    ],
  },
)
