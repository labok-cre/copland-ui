import path from 'path'

// esbuild が __dirname を注入するのでそのまま使用できる
const srcPath = path.resolve(__dirname, '../src')

/** @type { import('@storybook/nextjs-vite').StorybookConfig } */
const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-onboarding', '@storybook/addon-docs'],
  framework: {
    name: '@storybook/nextjs-vite',
    options: {},
  },
  staticDirs: ['../public'],

  /**
   * SCSS 内の `@/` エイリアスを解決するため、vite-tsconfig-paths と
   * scss カスタムインポーターを追加する。
   */
  viteFinal: async (config) => {
    const { mergeConfig } = await import('vite')
    const { default: tsconfigPaths } = await import('vite-tsconfig-paths')

    return mergeConfig(config, {
      plugins: [tsconfigPaths()],
      css: {
        preprocessorOptions: {
          scss: {
            api: 'modern',
            importers: [
              {
                findFileUrl(url) {
                  if (!url.startsWith('@/')) return null
                  const resolved = path
                    .resolve(srcPath, url.slice(2))
                    .replace(/\\/g, '/')
                  return new URL('file:///' + resolved)
                },
              },
            ],
          },
        },
      },
    })
  },
}

export default config
