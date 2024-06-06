import { defineConfig } from 'vite'

export default defineConfig({
  devServer: {
    port: 3001,
  },
    base: "/",
  })
  module.exports = {
    root: './',
    build: {
        outDir: 'dist',
    },
    publicDir: 'assets'
 } 