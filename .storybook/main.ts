import type { StorybookConfig } from '@storybook/nextjs-vite'
import path from 'path'

const srcPath = path.resolve(__dirname, '../src')

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-docs'],
  framework: {
    name: '@storybook/nextjs-vite',
    options: {},
  },
  staticDirs: ['../public'],

  viteFinal: async (config) => {
    const { mergeConfig } = await import('vite')
    const { default: tsconfigPaths } = await import('vite-tsconfig-paths')

    return mergeConfig(config, {
      plugins: [tsconfigPaths()],
      build: {
        sourcemap: false, // 本番ビルド時に重いソースマップを出力しない
      },
      css: {
        preprocessorOptions: {
          scss: {
            api: 'modern',
            importers: [
              {
                findFileUrl(url: string) {
                  if (!url.startsWith('@/')) return null
                  const resolved = path.resolve(srcPath, url.slice(2)).replace(/\\/g, '/')
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
