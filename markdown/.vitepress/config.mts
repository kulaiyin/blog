import { defineConfig } from "vitepress";
import markdownItTaskCheckbox from "markdown-it-task-checkbox";
import { isDevMode, loadDirMdFiles } from "./tools";
import { MermaidPlugin, MermaidMarkdown } from "vitepress-plugin-mermaid";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "开发日记博客",
  lang: "zh-CN",
  // 显示最后更新时间，基于修改文件的git提交时间
  lastUpdated: true,
  // 忽略死链接检查，只在生产模式下开启
  // https://vitepress.dev/zh/reference/site-config#ignoredeadlinks
  ignoreDeadLinks: isDevMode ? false : true,

  description:
    "记录开发过程中环境配置,遇到的问题和解决方案,TodoList,Week Record等.",
  locales: {
    zh: { label: "简体中文", lang: "zh-CN", link: "/index" },
    en: { label: "English", lang: "en-US", link: "/en/" },
  },
  themeConfig: {
    outline: [2, 3],
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: "首页",
        link: "/",
      },
      {
        text: "待办清单",
        link: "/todo-list",
      },
    ],
    // [本地搜索](https://vitepress.dev/zh/reference/default-theme-search)
    search: {
      provider: "local",
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: "搜索文档",
                buttonAriaLabel: "搜索文档",
              },
              modal: {
                noResultsText: "无法找到相关结果",
                resetButtonTitle: "清除查询条件",
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                },
              },
            },
          },
        },
      },
    },

    sidebar: {
      // 开发环境
      "/env": {
        base: "",
        items: [
          {
            text: "linux 环境配置",
            link: "/env/linux.md",
          },
          {
            text: "macos 环境配置",
            link: "/env/macos.md",
          },
          {
            text: "windows 环境配置",
            link: "/env/windows.md",
          },
          {
            text: "vscode 环境配置",
            link: "/env/vscode.md",
          },
        ],
      },
      // 开发环境
      "/frameworks": {
        base: "",
        items: [
          {
            text: "react框架",
            link: "/frameworks/react/index.md",
            items: [
              { text: "react18", link: "/frameworks/react/react18.md" },
              { text: "nextjs框架", link: "/frameworks/react/nextjs.md" },
            ],
          },
          {
            text: "nest框架",
            link: "/frameworks/nest/index.md",
            items: [
              { text: "nest-cli", link: "/frameworks/nest/nest-cli.md" },
              { text: "redis", link: "/frameworks/nest/redis.md" },
              { text: "websocket", link: "/frameworks/nest/websocket.md" },
            ],
          },
          {
            text: "vue框架",
            link: "/frameworks/vue/index.md",
            items: [
              { text: "vue2", link: "/frameworks/vue/vue2.md" },
              { text: "vue3", link: "/frameworks/vue/vue3.md" },
              { text: "全局状态", link: "/frameworks/vue/store.md" },
            ],
          },
          {
            text: "express框架",
            link: "/frameworks/express/index.md",
          },
          {
            text: "Kuikly框架",
            link: "/frameworks/kuikly/index.md",
          },
          {
            text: "Flutter框架",
            link: "/frameworks/flutter/index.md",
          },
          {
            text: "qiankun框架",
            link: "/frameworks/qiankun/index.md",
          },
        ],
      },
      // 数据库
      "/database": {
        base: "",
        items: [
          {
            text: "mysql数据库",
            link: "/database/mysql.md",
          },
          {
            text: "mongodb数据库",
            link: "/database/mongodb.md",
          },
          {
            text: "sqlite数据库",
            link: "/database/sqlite.md",
          },
          {
            text: "redis数据库",
            link: "/database/redis.md",
          },
          {
            text: "es数据库",
            link: "/database/elasticsearch.md",
          },
        ],
      },
      // 数据库
      "/mobile-app": {
        base: "",
        items: [
          {
            text: "安卓移动开发",
            link: "/mobile-app/android/index.md",
          },
          {
            text: "Ios移动开发",
            link: "/mobile-app/ios/index.md",
          },
          {
            text: "鸿蒙移动开发",
            link: "/mobile-app/harmonynext/index.md",
          },
        ],
      },
      // 日报
      "/years": {
        base: "",
        items: [
          {
            text: "2025-06",
            items: [
              { text: "09-15(24周)", link: "/years/2025/06/24-week.md" },
              { text: "16-22(25周)", link: "/years/2025/06/25-week.md" },
              { text: "16-22(26周)", link: "/years/2025/06/26-week.md" },
              { text: "23-29(27周)", link: "/years/2025/06/26-week.md" },
              { text: "06-15", link: "/years/2025/2025-06/06-15.md" },
            ],
          },
        ],
      },
      // 开发规范
      "/dev-specification": {
        base: "",
        items: [
          {
            text: "git提交规范",
            link: "/dev-specification/git/index.md",
            items: [
              { text: "cz-git", link: "/dev-specification/git/cz-git.md" },
            ],
          },
          {
            text: "代码格式化规范",
            link: "/dev-specification/code/index.md",
            items: [
              { text: "prettier", link: "/dev-specification/code/prettier.md" },
              { text: "eslint", link: "/dev-specification/code/eslint.md" },
            ],
          },
          {
            text: "docker镜像",
            link: "/dev-specification/docker/index.md",
            items: [
              {
                text: "docker-ui",
                link: "/dev-specification/docker/docker-ui.md",
              },
            ],
          },
        ],
      },
      // 网络
      "/network": {
        base: "",
        items: [
          {
            text: "实时消息推送",
            link: "/network/real-time-communication/index.md",
            items: [
              {
                text: "websocket",
                link: "/network/real-time-communication/websocket.md",
              },
              {
                text: "sse",
                link: "/network/real-time-communication/sse.md",
              },
            ],
          },
        ],
      },
      // leetcode算法
      "/leetcode": {
        base: "",
        items: loadDirMdFiles("leetcode/questions", { sortById: true }),
      },
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
  markdown: {
    // 开启代码块行号显示
    lineNumbers: true,
    config(md) {
      md.use(markdownItTaskCheckbox);
      // 引入mermaid插件支持流程图等图表绘制
      md.use(MermaidMarkdown);
    },
  },
  vite: {
    // 引入mermaid插件支持流程图等图表绘制
    plugins: [MermaidPlugin()],
    optimizeDeps: {
      include: ["mermaid"],
    },
    ssr: { noExternal: ["mermaid"] },
    server: {
      allowedHosts: isDevMode ? ["local.lenovo.com"] : [],
    },
  },
});
