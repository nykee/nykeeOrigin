import { defineConfig } from 'vite'
import VitePages from "vite-plugin-pages";
import { resolve } from "path";
import vue from '@vitejs/plugin-vue'
import fs from "fs-extra";
import matter from "gray-matter";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    VitePages({
      extensions: ["vue", "md"],
      pagesDir: "pages",
      extendRoute(route) {
        const path = resolve(__dirname, route.component.slice(1));
        const md = fs.readFileSync(path, "utf-8");
        const { data } = matter(md);
        route.meta = Object.assign(route.meta || {}, { frontmatter: data });

        return route;
      },
    }),],
  //全局引入
  css: {
    preprocessorOptions: {
      scss: {
        /**如果引入多个文件，可以使用
         * '@import "@/assets/scss/globalVariable1.scss";
         * @import"@/assets/scss/globalVariable2.scss";'
         **/
        // additionalData: '@import "@/style/globalVar.scss";',
      }
    }
  },
})
