import { defineConfig } from 'tsup'
import { sassPlugin } from 'esbuild-sass-plugin'
import path from 'path'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  sourcemap: true,
  clean: true,
  minify: true,
  external: ['react', 'react-dom'],
  tsconfig: 'tsconfig.lib.json',
  esbuildPlugins: [
    sassPlugin({
      importers: [
        {
          findFileUrl(url: string) {
            if (!url.startsWith('@/')) return null
            const resolved = path.resolve(__dirname, 'src', url.slice(2)).replace(/\\/g, '/')
            return new URL('file:///' + resolved)
          },
        },
      ],
    }),
  ],
})
