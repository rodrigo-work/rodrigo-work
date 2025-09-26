import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  outDir: 'dist',
  sourcemap: true,
  minify: true,
  dts: true,
  format: ['esm'],
  clean: true,
  target: 'esnext',
  treeshake: true
})
