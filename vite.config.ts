import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import path from "path"
import tailwindcss from "tailwindcss"
import autoprefixer from "autoprefixer"
const resolvePath = (pathname: string) => path.resolve(__dirname, pathname)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./",
  resolve: {
    alias: {
      "@": resolvePath("src"), // 设置 @ 别名指向 src 目录
      "~": resolvePath("node_modules"), // 可以设置更多别名
    },
  },
  css: {
    preprocessorOptions: {
      postcss: {
        plugins: [
          tailwindcss,
          autoprefixer,
        ]
      },
      less: {
        // 这里可以添加Less编译选项，如果不需要可以留空
      }
    }
  },
  build: {
    rollupOptions: {
      external: ['@emotion/react/jsx-runtime'],
      output: {
        globals: {
          '@emotion/react/jsx-runtime': '@emotion/react/jsx-runtime',
        },
      },
    },
  },
})
