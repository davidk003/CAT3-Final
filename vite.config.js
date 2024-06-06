import { defineConfig } from 'vite'

export default defineConfig({
  devServer: {
    port: 3001,
  },
    base: "/",
    build: {
      rollupOptions: {
          output:
          {
              format: 'es',
              strict: false,
              entryFileNames: "[name].js",
              dir: 'dist/'
          }
       }
    },
  })
