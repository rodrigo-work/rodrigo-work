import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/**/*.ts'],
  outDir: 'dist',
  format: ['esm'],
  target: 'node18',
  sourcemap: true,
  clean: true,
  splitting: false,
  minify: true,
  dts: false
})
