import { defineConfig, UserConfig } from 'vite'

// https://vitest.dev/config
export default defineConfig(<UserConfig>{
  test: {
    include : [ 'tests/**/*.{test,spec}.?(c|m)[jt]s?(x)' ]
  }
})
